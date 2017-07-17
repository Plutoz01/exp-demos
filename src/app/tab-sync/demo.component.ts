import { Component, OnDestroy } from '@angular/core';
import { SyncedDemoItemService } from './synced-demo-item.service';
import { Subscription } from 'rxjs';
import { DemoItem } from './demo-item.interface';

@Component( {
	templateUrl: './demo.component.html',
	styleUrls: [ './demo.component.scss' ]
} )
export class TabSyncDemoComponent implements OnDestroy {

	demoItem: DemoItem;
	demoItemSubscription: Subscription;

	constructor( private syncedDemoItemService: SyncedDemoItemService ) {
		this.demoItemSubscription = this.syncedDemoItemService.getDemoItem$().subscribe(
			( demoitem: DemoItem ) => {
				console.log( 'demo item arrived to subscription' );
				this.demoItem = demoitem;
			}
		)
	}

	ngOnDestroy() {
		this.demoItemSubscription.unsubscribe();
	}

	onUpdate() {
		this.syncedDemoItemService.update( this.demoItem );
	};

}
