import { Injectable } from '@angular/core';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { DemoItem } from './demo-item.interface';

@Injectable()
export class SyncedDemoItemService {

	static readonly demoItemKey = 'myDemoItem';
	private demoItemSource = new BehaviorSubject<DemoItem>( <DemoItem>{ name: '', description: '' } );

	constructor( private localStorageService: LocalStorageService ) {
		localStorageService.changedWithKey$( SyncedDemoItemService.demoItemKey )
			.subscribe( ( newDemoItem: DemoItem ) => this.demoItemSource.next( newDemoItem ) );
	}

	update( item: DemoItem ) {
		this.localStorageService.setItem<DemoItem>( SyncedDemoItemService.demoItemKey, item );
	}

	getDemoItem$(): Observable<DemoItem> {
		return this.demoItemSource.asObservable();
	}

}
