import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../../model/customer";
import {CustomerType} from "../../model/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private API_URL = ' http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
  }

  findAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL + 'customerList');
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(this.API_URL + 'customerList/' + id);
  }

  findAllCustomerType(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.API_URL + 'customerTypes/');
  }

  addCustomer(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.API_URL, customer);
  }

  getById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL + '/customerList' + id);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.API_URL + '/customerList' + id, customer);
  }
}
