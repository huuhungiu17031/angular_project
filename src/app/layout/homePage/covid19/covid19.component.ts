import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Info = [
    {
      "title":"Viên Sủi Bổ Sung Canxi Hỗ Trợ Xương Răng Swiss... ",
      "price":"900,000",
      "image":"assets/image/covid-1.webp"
    },
    {
      "title":"Viên Sủi Bổ Sung Đa Vitamin Hỗ Trợ Da Và...  ",
      "price":"5,900,000",
      "image":'assets/image/covid-2.webp'
    },
    {
      "title":"Viên Sủi Bổ Sung Tăng Cường Đề Kháng Swiss Energy...  ",
      "price":"4,900,000",
      "image":"assets/image/covid-3.webp"
    },
    {
      "title":"Viên Sủi Làm Đẹp Da Ngăn Ngừa Lão Hóa Swiss...  ",
      "price":"3,900,000",
      "image":"assets/image/covid-4.webp"
    },
    {
      "title":"Viên Uống Bổ Sung Đa Vitamin Hammer Nutrition Premium Insurance...  ",
      "price":"1,980,000",
      "image":"assets/image/covid-5.webp"
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
