import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer/customer.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList: Customer[];
  customerNameDelete: string;
  customerIdDelete: number;

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.findAllCustomer().subscribe(value => {
      this.customerList = value;
    })
  }

  getInfoCustomerDelete(id: number, name: string): void {
    this.customerIdDelete = id;
    this.customerNameDelete = name;
  }

  deleteCustomer(): void {
    this.customerService.deleteCustomer(this.customerIdDelete).subscribe(value => {
      alert('Delete customer:  [' + this.customerNameDelete + ']   successfully!');
      this.ngOnInit();
    });

  }
}
