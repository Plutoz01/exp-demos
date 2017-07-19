import { RouterModule, Routes } from '@angular/router';
import { SyncedPriorityServiceDemoComponent } from './demo.component';

const routes: Routes = [
	{ path: 'synced-priority-service',  component: SyncedPriorityServiceDemoComponent }
];

export const SyncedPriorityServiceRouting = RouterModule.forChild( routes );
