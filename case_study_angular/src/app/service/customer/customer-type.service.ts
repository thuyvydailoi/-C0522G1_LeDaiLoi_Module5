import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {CustomerType} from "../../model/customer-type";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  private API_URL = "http://localhost:3000/customerType";

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.API_URL);
  }

  findAll(): Observable<CustomerType[]> {
    return this.httpClient
      .get<CustomerType[]>(this.API_URL);
  }
}
