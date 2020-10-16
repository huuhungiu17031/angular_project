import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onewaybinding',
  templateUrl: './onewaybinding.component.html',
  styleUrls: ['./onewaybinding.component.css']
})
export class OnewaybindingComponent implements OnInit {
  public name: string = "Nguyen huu hung";
  public objTen: any = { name: "nguyen huu hung", genders: "Nu" };
  public account: any = {
    username: '',
    password: '',
  }
  constructor() { }

  ngOnInit(): void {
  }
  save(password){
    this.account.password=password.value;
  }
}
