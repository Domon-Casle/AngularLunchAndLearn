import { Component, OnInit, Input } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-dropdown-container',
  templateUrl: './dropdown-container.component.html',
  styleUrls: ['./dropdown-container.component.less']
})
export class DropdownContainerComponent implements OnInit {

  private _customers: Array<Customer>;

  @Input() active: boolean;

  constructor(private customerService: CustomersService) { }

  ngOnInit() {
    if(this.active) {
      this._customers = this.customerService.getActiveCustomers();
    } else {
      this._customers = this.customerService.getCustomers();
    }
  }

}
