import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCarouselComponent } from './sub-carousel.component';

describe('SubCarouselComponent', () => {
  let component: SubCarouselComponent;
  let fixture: ComponentFixture<SubCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
