import { Observable, Subject, Subscription } from 'rxjs';

export class SyncedTask<T, P> {
	private static nextId = 1;

	readonly id = SyncedTask.nextId++;
	readonly processedSource = new Subject<SyncedResult<T>>();
	taskToProcess: Observable<T>;
	priority?: P;

	constructor( taskToProcess: Observable<T>, priority?: P ) {
		this.taskToProcess = taskToProcess;
		this.priority = priority;
	}
}

export type SyncedResultType = 'PROCESSED' | 'REJECTED';
export class SyncedResult<T> {
	resultType: SyncedResultType;
	result?: T;

	constructor( resultType: SyncedResultType, result?: T ) {
		this.resultType = resultType;
		this.result = result;
	}
}

export abstract class SyncedPriorityServiceBase<T, P> {

	private syncedTaskSource = new Subject<SyncedTask<T, P>>();
	private processEventSource = new Subject();
	private pendingTaskSubscription: Subscription;

	private taskPriorizerFn: ( syncedTasks: SyncedTask<T, P>[] ) => SyncedTask<T, P>;

	constructor(
		taskPriorizerFn: ( syncedTasks: SyncedTask<T, P>[] ) => SyncedTask<T, P> = ( syncedTasks: SyncedTask<T, P>[] ) => syncedTasks[ 0 ]
	) {
		this.taskPriorizerFn = taskPriorizerFn;

		this.syncedTaskSource.buffer( this.processEventSource )
			.filter( ( syncedTasks: SyncedTask<T, P>[] ) => syncedTasks && syncedTasks.length > 0 )
			.subscribe( ( syncedTasks: SyncedTask<T, P>[] ) => {
				const highestPriorityTask = this.taskPriorizerFn( syncedTasks );

				// iterate over the rest tasks and reject them
				syncedTasks.filter( ( syncedTask: SyncedTask<T, P> ) => syncedTask.id !== highestPriorityTask.id ).forEach(
					( syncedTask: SyncedTask<T, P> ) => {
						syncedTask.processedSource.next( new SyncedResult<T>( 'REJECTED' ) );
						syncedTask.processedSource.complete();
					} );

				if ( !highestPriorityTask ) {
					return;
				}

				this.pendingTaskSubscription = highestPriorityTask.taskToProcess.subscribe(
					( result: T ) => highestPriorityTask.processedSource.next( new SyncedResult( 'PROCESSED', result ) ),
					( error ) => highestPriorityTask.processedSource.error( error ),
					() => {
						highestPriorityTask.processedSource.complete();
						this.pendingTaskSubscription.unsubscribe();
						this.processEventSource.next();
					}
				)
			} );
	}

	requestSyncedProcess$( taskToSyncedProcess: Observable<T>, priority?: P ): Observable<SyncedResult<T>> {
		const newTask = new SyncedTask( taskToSyncedProcess, priority );

		// delay task scheduling and processing until the first subscription will happened
		return Observable.of( 1 ).do( () => {
			this.syncedTaskSource.next( newTask );
			// if there is no pending task, start it immediately
			if ( !this.hasPendingTask ) {
				this.processEventSource.next();
			}
		} ).flatMap( () => newTask.processedSource.asObservable() );
	}

	get hasPendingTask() {
		return !!this.pendingTaskSubscription && !this.pendingTaskSubscription.closed;
	}

}
