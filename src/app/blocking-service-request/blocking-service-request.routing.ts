import { BlockingServiceRequestDemoComponent } from './demo.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'blocking-service-request',  component: BlockingServiceRequestDemoComponent }
];

export const BlockingServiceRequestRouting = RouterModule.forChild( routes );
