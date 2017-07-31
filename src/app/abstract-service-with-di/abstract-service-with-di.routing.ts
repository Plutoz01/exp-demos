import { AbstractServiceWithDIDemoComponent } from './demo.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'abstract-service-with-di',  component: AbstractServiceWithDIDemoComponent }
];

export const AbstractServiceWithDIRouting = RouterModule.forChild( routes );
