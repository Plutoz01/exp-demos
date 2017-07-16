import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BlockingServiceRequestService } from './blocking-service-request.service';

@Component( {
	templateUrl: './demo.component.html',
	styleUrls: [ './demo.component.scss' ]
} )
export class BlockingServiceRequestDemoComponent  {

	constructor( private blockingService: BlockingServiceRequestService ) {
		const subscription1 = Observable.interval( 3000 )
			.first()
			.do( () => console.log( 'slowMethod1-1 called now' ) )
			.flatMap( () => this.blockingService.slowMethod1() )
			.subscribe( ( result ) => {
					console.log( 'slowMethod1-1 arrived:', result );
					subscription1.unsubscribe();
				}
			);

		const subscription2 = Observable.interval( 4000 )
			.first()
			.do( () => console.log( 'slowMethod2 called now' ) )
			.flatMap( () => this.blockingService.slowMethod2() )
			.subscribe(
				( result ) => {
					console.log( 'slowMethod2 arrived:', result );
					subscription2.unsubscribe();
				}
			);

		const subscription3 = Observable.interval( 2000 )
			.first()
			.do( () => console.log( 'slowMethod1-3 called now' ) )
			.flatMap( () => this.blockingService.slowMethod1() )
			.subscribe( ( result ) => {
					console.log( 'slowMethod1-3 arrived:', result );
					subscription3.unsubscribe();
				}
			);
	}
}
