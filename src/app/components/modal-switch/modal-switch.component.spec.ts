import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSwitchComponent } from './modal-switch.component';

describe('ModalSwitchComponent', () => {
  let component: ModalSwitchComponent;
  let fixture: ComponentFixture<ModalSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
