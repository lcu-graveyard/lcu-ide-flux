import { Component, Injector } from '@angular/core';
import { IControlBuilder } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeFluxModulesPanelDetails, ForgeFluxModulesPanelConfig } from '../flux-modules-panel.core';

@Component({
	selector: 'forge-flux-modules-panel-builder',
	templateUrl: './flux-modules-panel-builder.component.html',
	styleUrls: ['./flux-modules-panel-builder.component.scss']
})
export class ForgeFluxModulesPanelBuilderComponent
	extends ForgeGenericControl<ForgeFluxModulesPanelDetails, ForgeFluxModulesPanelConfig>
	implements IControlBuilder<ForgeFluxModulesPanelDetails, ForgeFluxModulesPanelConfig> {
	//  Fields

	//  Properties

	//  Constructors
	constructor(protected injector: Injector) {
		super(injector);
	}

	//	Life Cycle

	//	API Methods

	//	Helpers
}
