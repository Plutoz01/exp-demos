import { RouterModule, Routes } from '@angular/router';
import { TabSyncDemoComponent } from './demo.component';

const routes: Routes = [
	{ path: 'tab-sync',  component: TabSyncDemoComponent }
];

export const TabSyncRouting = RouterModule.forChild( routes );
