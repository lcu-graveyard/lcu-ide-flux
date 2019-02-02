import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxModulesPanelComponent } from './flux-modules-panel.component';

describe('FluxModulesPanelComponent', () => {
  let component: FluxModulesPanelComponent;
  let fixture: ComponentFixture<FluxModulesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxModulesPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxModulesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
