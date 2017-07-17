import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LocalStorageService {

	hasItem( key: string ): boolean {
		return localStorage.getItem( key ) !== null;
	}

	setItem<T>( key: string, itemToSet: T ) {
		localStorage.setItem( key, JSON.stringify( itemToSet ) )
	}

	getItem<T>( key: string ): T {
		return  JSON.parse( localStorage.getItem( key ) );
	}

	removeItem( key: string ) {
		localStorage.removeItem( key );
	}

	clear() {
		localStorage.clear();
	}

	changed$(): Observable<StorageEvent> {
		return Observable.fromEvent( window, 'storage' );
	}

	changedWithKey$<T>( key: string ): Observable<T> {
		return this.changed$()
			.filter( ( storageEvent: StorageEvent ) => storageEvent.key === key )
			.map( ( storageEvent: StorageEvent ) => <T> JSON.parse( storageEvent.newValue ) );
	}

}
