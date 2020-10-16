import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'combo-product',
  templateUrl: './combo-product.component.html',
  styleUrls: ['./combo-product.component.css']
})
export class ComboProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Info = [
    {
      "title":"Viên uống đốt mỡ giảm cân Hydroxycut Hardcore Elite 180...",
      "price":"900,000",
      "image":"assets/image/combo-1.webp"
    },
    {
      "title":"Sữa Tăng Cân Mass Muscle Gainer 4.62kg 5 mùi ",
      "price":"5,900,000",
      "image":'assets/image/combo-2.webp'
    },
    {
      "title":"Sữa Tăng Cơ WheyLabs 100% Isolate Protein 5.16lbs (2.34kg) ",
      "price":"4,900,000",
      "image":"assets/image/combo-3.webp"
    },
    {
      "title":"Sữa Tăng Cân Extreme Massive Mass Gainer 11.34kg 4 mùi ",
      "price":"3,900,000",
      "image":"assets/image/combo-4.webp"
    },
    {
      "title":"Sữa tăng cân Applied Nutrition Critical Mass 6kg - 3... ",
      "price":"1,980,000",
      "image":"assets/image/combo-5.webp"
    },
    
  ]
  SlideOptions = { items: 5, dots: true, nav: false };
  CarouselOptions = {
    items: 1,
    loop: false,
    margin: 0,
    nav: true,
    navContainer: '#customNav',
    navText: [],
    dots: false,
  };

}
