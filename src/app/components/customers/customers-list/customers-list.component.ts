import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  constructor() { };
  
  ngOnInit(): void { };

  filteredCustomers: any[] = [];
  'customersOrderTotal': number;
  currencyCode: string = 'USD';

  private_customers: ICustomer[] = [];
  @Input() get customers(): ICustomer[] {
    return this.customers;
  }
  set customers(value:ICustomer[]) {
    if(value) {
      this.filteredCustomers = this.private_customers = value;
      this.calculateOrders();
    }
  }

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal;
    });
  };
  filter(data: string) {
    if(data) {
      this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
        return cust.name.toLowerCase().indexOf(data.toLocaleLowerCase()) > -1 || cust.city.toLocaleLowerCase().indexOf(data.toLocaleLowerCase()) > -1 || cust.orderTotal.toString().indexOf(data) > -1;
      });
      this.calculateOrders();
    } else {
      this.filteredCustomers = this.customers;
    }
  };
  sort(prop: string) {

  }

}
