import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { DemoListComponent } from './components/demo-list/demo-list.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { LocalStorageService } from './services/local-storage.service';

@NgModule( {
	imports: [
		CommonModule,
		RouterModule,
		BsDropdownModule.forRoot()
	],
	declarations: [
		HeaderNavigationComponent,
		DemoListComponent
	],
	providers: [
		LocalStorageService
	],
	exports: [
		HeaderNavigationComponent,
		DemoListComponent
	]
} )
export class SharedModule {
}
