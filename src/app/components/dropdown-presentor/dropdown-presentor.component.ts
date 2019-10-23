import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-dropdown-presentor',
  templateUrl: './dropdown-presentor.component.html',
  styleUrls: ['./dropdown-presentor.component.less']
})
export class DropdownPresentorComponent implements OnInit {

  @Input() list: Array<Customer>;
  
  constructor() { }

  ngOnInit() {
  }
}
