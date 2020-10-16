import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPromotionComponent } from './footer-promotion.component';

describe('FooterPromotionComponent', () => {
  let component: FooterPromotionComponent;
  let fixture: ComponentFixture<FooterPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
