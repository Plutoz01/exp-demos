import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';

@Injectable()
export class NumberService extends BaseService<number> {

	someUsefulMethod(): number {
		console.log( 'number service called' );
		return 123;
	}
}
