import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { BlockingServiceRequestModule } from './blocking-service-request/blocking-service-request.module';
import { SharedModule } from './shared/shared.module';
import { TabSyncModule } from './tab-sync/tab-sync.module';
import { SyncedPriorityServiceModule } from './synced-priority-service/synced-priority-service.module';
import { AbstractServiceWithDiModule } from './abstract-service-with-di/abstract-service-with-di.module';

@NgModule( {
	declarations: [
		AppComponent
	],
	imports: [
		AppRouting,
		BrowserModule,
		SharedModule,
		SyncedPriorityServiceModule,
		BlockingServiceRequestModule,
		AbstractServiceWithDiModule,
		TabSyncModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
} )
export class AppModule {
}
