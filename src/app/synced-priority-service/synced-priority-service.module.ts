import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyncedPriorityServiceDemoComponent } from './demo.component';
import { SyncedPriorityDemoService } from './synced-priority-demo.service';
import { SyncedPriorityServiceRouting } from './synced-priority-service.routing';

@NgModule( {
	imports: [
		SyncedPriorityServiceRouting,
		CommonModule
	],
	providers: [
		SyncedPriorityDemoService
	],
	declarations: [
		SyncedPriorityServiceDemoComponent
	]
} )
export class SyncedPriorityServiceModule {
}
