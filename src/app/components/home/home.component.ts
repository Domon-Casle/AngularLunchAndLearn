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
    // You can still do anything that you could in JS in the TS file for most part sometimes its gets converted incorrectly so best to stay in TS if possible
    if (this.myName && this.myName.length === 0) {
      alert("Please provide a name!");
      this.myName = "Example: Philip Knox";
    } else {
      alert("Hello " + this.myName + "!! Welcome to your lunch and learn");
    }
  }
}
