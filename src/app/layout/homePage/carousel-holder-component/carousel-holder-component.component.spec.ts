import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselHolderComponentComponent } from './carousel-holder-component.component';

describe('CarouselHolderComponentComponent', () => {
  let component: CarouselHolderComponentComponent;
  let fixture: ComponentFixture<CarouselHolderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselHolderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselHolderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
