import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  public status: boolean = false;
  constructor() { }
  dangXuat(){
    this.status=false;
  }
  dangNhap(username: string, password: string) {
    if(username==='1' && password==='1'){
      this.status=true;
      console.log("username:"+username,"password:"+password);
    }
    else{
      this.status=false;
    }
  }
  ngOnInit(): void {
  }

}
