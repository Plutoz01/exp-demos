import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BlockingServiceRequestService {

	static readonly recheckInterval = 100;

	private _hasActiveRequest = false;

	slowMethod1(): Observable<string> {
		return this.createBlockingWrapper$( Observable.interval( 2000 ).first().map( () => 'test' ) );
	}

	slowMethod2(): Observable<number> {
		return this.createBlockingWrapper$( Observable.interval( 3000 ).first().map( () => 123 ) );
	}

	private createBlockingWrapper$( observableToWrap: Observable<any> ): Observable<any> {
		return Observable.interval( BlockingServiceRequestService.recheckInterval )
			.filter( () => !this._hasActiveRequest )
			.do( () => {
				console.log( 'wrapper trying to set _hasActiveRequest to true' );
				this._hasActiveRequest = true;
			} )
			.flatMap( () => observableToWrap )
			.finally( () => {
					console.log( 'wrapper trying to set _hasActiveRequest to false' );
					this._hasActiveRequest = false;
				}
			);
	}

}
