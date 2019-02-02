import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lcu-flux-modules-panel',
  template: `
    <p>
      flux-modules-panel works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class FluxModulesPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
