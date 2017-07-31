import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractServiceWithDIDemoComponent } from './demo.component';
import { AbstractServiceWithDIRouting } from './abstract-service-with-di.routing';
import { StringService } from './string-service.service';
import { NumberService } from './number-service.service';

@NgModule( {
	imports: [
		CommonModule,
		AbstractServiceWithDIRouting
	],
	declarations: [
		AbstractServiceWithDIDemoComponent
	],
	providers: [
		{ provide: 'StringService', useClass: StringService },
		{ provide: 'NumberService', useClass: NumberService }

	]
} )
export class AbstractServiceWithDiModule {
}
