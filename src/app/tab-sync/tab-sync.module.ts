import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabSyncRouting } from './tab-sync.routing';
import { TabSyncDemoComponent } from './demo.component';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { SyncedDemoItemService } from './synced-demo-item.service';
import { FormsModule } from '@angular/forms';

@NgModule( {
	imports: [
		TabSyncRouting,
		CommonModule,
		FormsModule
	],
	declarations: [
		TabSyncDemoComponent
	],
	providers: [
		SyncedDemoItemService
	]
} )
export class TabSyncModule {
}
