import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { DemoListComponent } from './demo-list/demo-list.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

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
	exports: [
		HeaderNavigationComponent,
		DemoListComponent
	]
} )
export class SharedModule {}
