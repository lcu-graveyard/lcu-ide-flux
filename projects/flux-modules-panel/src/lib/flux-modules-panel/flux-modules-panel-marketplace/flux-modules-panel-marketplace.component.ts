import { Component, Injector } from '@angular/core';
import { IControlMarketplace } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeFluxModulesPanelDetails, ForgeFluxModulesPanelConfig } from '../flux-modules-panel.core';

@Component({
	selector: 'forge-flux-modules-panel-marketplace',
	templateUrl: './flux-modules-panel-marketplace.component.html',
	styleUrls: ['./flux-modules-panel-marketplace.component.scss']
})
export class ForgeFluxModulesPanelMarketplaceComponent
	extends ForgeGenericControl<ForgeFluxModulesPanelDetails, ForgeFluxModulesPanelConfig>
	implements IControlMarketplace<ForgeFluxModulesPanelDetails, ForgeFluxModulesPanelConfig> {
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
