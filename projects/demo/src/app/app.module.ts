import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { FluxModulesPanelComponent } from './flux-modules-panel/flux-modules-panel.component';

@NgModule({
  declarations: [AppComponent, FluxModulesPanelComponent],
  imports: [BrowserModule],
  entryComponents: [FluxModulesPanelComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(protected injector: Injector) {
    const panel = createCustomElement(FluxModulesPanelComponent, { injector });

    customElements.define('flux-modules-panel', panel);
  }

  public ngDoBootstrap() {}
}
