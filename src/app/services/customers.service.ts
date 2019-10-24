import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';


@Injectable({
  providedIn: 'root' // This means it DI is at the root level
})
export class CustomersService {
  private customerList = [];

  constructor() {
    this.customerList.push(new Customer(1, "Adam W", true));
    this.customerList.push(new Customer(2, "Bart S", false));
    this.customerList.push(new Customer(3, "Peter G", true));
    this.customerList.push(new Customer(4, "Domon C", true));
  }

  // This file is usally more of an API caller with observables and things of that nature (think async await) but for now just understand this as a 'repository layer'
  getActiveCustomers(): Array<Customer> {
    return this.customerList.filter((customer) => {
      return customer.active;
    });
  }

  getCustomers(): Array<Customer> {
    return this.customerList;
  }

  getCustomer(id: number): Customer {
    return this.customerList.find((customer) => {
      return customer.id === id;
    });
  }
}
