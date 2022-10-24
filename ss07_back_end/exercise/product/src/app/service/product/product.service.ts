import { Injectable } from '@angular/core';
import {Product} from "../../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private API_URL = "http://localhost:3000/products";

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL);
  }

  saveProduct(product): Observable<Product> {
    return this.http.post<Product>(this.API_URL, product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(this.API_URL + "/" + id);
  }

  update(product: Product): Observable<void> {
    return this.http.patch<void>(this.API_URL + "/" + product.id, product);
  }

  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(this.API_URL + "/" + id);
  }
}
