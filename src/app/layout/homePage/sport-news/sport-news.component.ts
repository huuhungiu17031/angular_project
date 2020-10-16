import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sport-news',
  templateUrl: './sport-news.component.html',
  styleUrls: ['./sport-news.component.css']
})
export class SportNewsComponent implements OnInit {
  Info = [
    {
      "title": "18 Video Bài Tập Dance WorkOut Trên YouTube Giúp Buổi Tập Thêm Thú Vị",
      "content": "Nếu thói quen tập luyện tại nhà của bạn hơi cũ một chút việc thử một số video tập luyện Dance Workout tại nhà có...",
      "image": "assets/image/new-1.webp"
    },
    {
      "title": "Sữa Tăng Cân Mass Muscle Gainer 4.62kg 5 mùi ",
      "content": "Nam giới thường muốn tăng cân, tăng cơ để trông vạm vỡ và cuốn hút. Thế nhưng, một số người khi lên ký lại béo...",
      "image": 'assets/image/new-2.webp'
    },
    {
      "title": "Sữa Tăng Cơ WheyLabs 100% Isolate Protein 5.16lbs (2.34kg) ",
      "content": "Các bài tập bụng về cơ bản có thể áp dụng cho cả nam lẫn nữ. Tuy nhiên, có một số động tác được đánh...",
      "image": "assets/image/new-3.webp"
    },
    {
      "title": "Sữa Tăng Cân Extreme Massive Mass Gainer 11.34kg 4 mùi ",
      "content": "Tập luyện thể dục thể thao giúp cho mọi người có một sức khỏe tốt hơn. Tuy nhiên nếu tập luyện không đúng cách sẽ...",
      "image": "assets/image/new-4.webp"
    },
    {
      "title": "Sữa tăng cân Applied Nutrition Critical Mass 6kg - 3... ",
      "content": "",
      "image": "assets/image/new-5.webp"
    },

  ]



  SlideOptions = { items: 4, dots: true, nav: false };
  CarouselOptions = {
    items: 1,
    loop: false,
    margin: 0,
    nav: true,
    navContainer: '#customNav',
    navText: [],
    dots: false,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
