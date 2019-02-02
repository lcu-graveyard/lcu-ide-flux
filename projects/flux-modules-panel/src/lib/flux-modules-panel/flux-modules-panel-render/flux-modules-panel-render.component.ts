import { Component, Injector } from '@angular/core';
import { IControlRender } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeFluxModulesPanelDetails, ForgeFluxModulesPanelConfig } from '../flux-modules-panel.core';

@Component({
	selector: 'forge-flux-modules-panel-render',
	templateUrl: './flux-modules-panel-render.component.html',
	styleUrls: ['./flux-modules-panel-render.component.scss']
})
export class ForgeFluxModulesPanelRenderComponent
	extends ForgeGenericControl<ForgeFluxModulesPanelDetails, ForgeFluxModulesPanelConfig>
	implements IControlRender<ForgeFluxModulesPanelDetails, ForgeFluxModulesPanelConfig> {
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
