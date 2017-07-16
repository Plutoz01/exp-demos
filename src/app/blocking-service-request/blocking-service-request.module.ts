import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockingServiceRequestDemoComponent } from './demo.component';
import { BlockingServiceRequestRouting } from './blocking-service-request.routing';
import { BlockingServiceRequestService } from './blocking-service-request.service';

@NgModule( {
	imports: [
		CommonModule,
		BlockingServiceRequestRouting
	],
	declarations: [
		BlockingServiceRequestDemoComponent
	],
	providers: [
		BlockingServiceRequestService
	]
} )
export class BlockingServiceRequestModule {
}
