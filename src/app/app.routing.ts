import { RouterModule, Routes } from '@angular/router';
import { DemoListComponent } from './shared/demo-list/demo-list.component';

const appRoutes: Routes = [
	{ path: '', pathMatch: 'full', component: DemoListComponent }
];

export const AppRouting = RouterModule.forRoot( appRoutes );
