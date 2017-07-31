import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';

@Injectable()
export class StringService extends BaseService<string> {

	someUsefulMethod(): string {
		console.log( 'string service called' );
		return 'string service';
	}
}
