import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseWeightComponent } from './increase-weight.component';

describe('IncreaseWeightComponent', () => {
  let component: IncreaseWeightComponent;
  let fixture: ComponentFixture<IncreaseWeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncreaseWeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
