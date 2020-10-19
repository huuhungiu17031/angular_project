import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlModule } from 'ngx-owl-carousel';






import { HeaderComponent } from './header/header.component';





import { NavbarComponent } from './navbar/navbar.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SubCarouselComponent } from './sub-carousel/sub-carousel.component';
import { ProductBarComponent } from './product-bar/product-bar.component';
import { HotProductsComponent } from './hot-products/hot-products.component';
import { CarouselHolderComponentComponent } from './carousel-holder-component/carousel-holder-component.component';
import { Covid19Component } from './covid19/covid19.component';
import { ComboProductComponent } from './combo-product/combo-product.component';
import { IncreaseWeightComponent } from './increase-weight/increase-weight.component';
import { SportNewsComponent } from './sport-news/sport-news.component';
import { FooterPromotionComponent } from './footer-promotion/footer-promotion.component';
import { ProductItemComponent } from './product-item/product-item.component';




@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    MenuHeaderComponent,
    CarouselComponent,
    SubCarouselComponent,
    ProductBarComponent,
    HotProductsComponent,
    CarouselHolderComponentComponent,
    Covid19Component,
    ComboProductComponent,
    IncreaseWeightComponent,
    SportNewsComponent,
    FooterPromotionComponent,
    ProductItemComponent,
  ],
  imports: [
    CommonModule,
    OwlModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    MenuHeaderComponent,
    CarouselComponent,
    SubCarouselComponent,
    ProductBarComponent,
    HotProductsComponent,
    CarouselHolderComponentComponent,
    Covid19Component,
    ComboProductComponent,
    IncreaseWeightComponent,
    SportNewsComponent,
    FooterPromotionComponent,
    ProductItemComponent,
  ]
})
export class HomePageModule { }
