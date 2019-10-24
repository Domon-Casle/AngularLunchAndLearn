import { Component, OnInit, Input } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-dropdown-container', // HTML tag to use to 'make' this component
  templateUrl: './dropdown-container.component.html', // html page that backs this component
  styleUrls: ['./dropdown-container.component.less'] // css file that backs this component
})
export class DropdownContainerComponent implements OnInit {

  // Private to this class
  private _customers: Array<Customer>;

  // Incoming 
  @Input() active: boolean;

  // Dependency injected this service
  constructor(private customerService: CustomersService) { }

  // Called on initiziation of the component
  ngOnInit() {
    if(this.active) {
      this._customers = this.customerService.getActiveCustomers();
    } else {
      this.active = false;
      this._customers = this.customerService.getCustomers();
    }
  }
}
