import { NgModule } from '@angular/core';

import { FathymSharedModule } from '@lcu/hosting';
import { BaseDisplayModule } from '@lcu/elements';
import { ForgeFluxModulesPanelBuilderComponent } from './flux-modules-panel-builder/flux-modules-panel-builder.component';
import { ForgeFluxModulesPanelMarketplaceComponent } from './flux-modules-panel-marketplace/flux-modules-panel-marketplace.component';
import { ForgeFluxModulesPanelRenderComponent } from './flux-modules-panel-render/flux-modules-panel-render.component';

export class ForgeFluxModulesPanelDisplayModule extends BaseDisplayModule {
	public Builder() {
		return ForgeFluxModulesPanelBuilderComponent;
	}

	public Marketplace() {
		return ForgeFluxModulesPanelMarketplaceComponent;
	}

	public Render() {
		return ForgeFluxModulesPanelRenderComponent;
	}
}

var comps = [
	ForgeFluxModulesPanelBuilderComponent,
	ForgeFluxModulesPanelMarketplaceComponent,
	ForgeFluxModulesPanelRenderComponent,
];

@NgModule({
	imports: [
		FathymSharedModule,
	],
	declarations: [
		...comps,
	],
	exports: [
		...comps,
	],
	entryComponents: [
		...comps,
	]
})
export class ForgeFluxModulesPanelModule { }
