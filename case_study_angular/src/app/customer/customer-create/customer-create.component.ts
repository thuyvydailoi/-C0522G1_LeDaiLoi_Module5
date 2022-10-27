import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../service/customer/customer.service";
import {CustomerTypeService} from "../../service/customer/customer-type.service";
import {CustomerType} from "../../model/customer-type";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerTypeList: CustomerType[];

  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    customerName: new FormControl(),
    customerBirthday: new FormControl(),
    customerGender: new FormControl(),
    customerIdCard: new FormControl(),
    customerPhone: new FormControl(),
    customerEmail: new FormControl(),
    customerAddress: new FormControl(),
    customerType: new FormControl(),
  });
  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllCategory();
  }

  private getAllCategory() {
    return this.customerTypeService.findAll().subscribe(value => {
      this.customerTypeList = value;
    })
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.addCustomer(customer).subscribe(value => {
      alert('Tạo mới thành công!');
      this.customerForm.reset();
      this.router.navigateByUrl('/customer/list');
    });

  }
}
