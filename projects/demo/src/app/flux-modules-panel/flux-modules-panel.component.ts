import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lcu-flux-modules-panel',
  template: `
    <p>
      <slot name="title">flux-modules-panel works!</slot>
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FluxModulesPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
