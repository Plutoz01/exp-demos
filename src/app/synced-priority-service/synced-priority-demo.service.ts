import { Injectable } from '@angular/core';
import { SyncedPriorityServiceBase, SyncedTask } from './synced-priority-base.service';

@Injectable()
export class SyncedPriorityDemoService extends SyncedPriorityServiceBase<number, number> {

	private static selectTaskWithSmallestValue( syncedTasks: SyncedTask<number, number>[] ) {
		return syncedTasks.reduce( ( prev: SyncedTask<number, number>, current: SyncedTask<number, number> ) => {
			return prev.priority > current.priority ? current : prev;
		} )
	}

	constructor() {
		super( SyncedPriorityDemoService.selectTaskWithSmallestValue );
	}

}
