import { Component, Inject } from '@angular/core';
import { BaseService } from './base-service.service';

@Component( {
	templateUrl: './demo.component.html',
	styleUrls: [ './demo.component.scss' ],
} )
export class AbstractServiceWithDIDemoComponent {

	constructor(
		@Inject( 'StringService' ) private stringService: BaseService<string>,
		@Inject( 'NumberService' ) private numberService: BaseService<number>
	) {
		stringService.someUsefulMethod();
		numberService.someUsefulMethod();
	}
}
