import { Component } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

import { SyncedPriorityDemoService } from './synced-priority-demo.service';
import { SyncedResult } from './synced-priority-base.service';


@Component( {
	templateUrl: './demo.component.html'
} )
export class SyncedPriorityServiceDemoComponent {

	constructor( private service: SyncedPriorityDemoService ) { }

	onScheduleNew() {
		const taskLength = _.random( 1000, 4000 );
		const jobToProcess = Observable.of( taskLength ).delay( taskLength );

		console.log( 'task scheduled with length of ', taskLength, 'ms.' );
		const scheduledSubscription = this.service.requestSyncedProcess$( jobToProcess, taskLength ).subscribe( {
			next: ( syncedResult: SyncedResult<number> ) => {
				console.log( 'task finished. status: ', syncedResult.resultType, ' returned value: ', syncedResult.result )
			},
			complete: () => {
				scheduledSubscription.unsubscribe();
			}
		} );
	}
}
