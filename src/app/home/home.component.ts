import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  public myName: string;

  constructor() { }

  ngOnInit() {
    this.myName = "";
  }

  sayHello() {
    if (this.myName.length === 0) {
      alert("Please provide a name!");
      this.myName = "Example: Philip Knox";
    } else {
      alert("Hello " + this.myName + "!! Welcome to your lunch and learn");
    }
  }
}
