import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../../model/category";
import {Product} from "../../model/product";

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private API_URL = "http://localhost:3000/categories";

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Category[]> {
    return this.httpClient
      .get<Category[]>(this.API_URL);
  }


  findById(id: number): Observable<Category> {
    return this.httpClient
      .get<Category>(this.API_URL + '/' + id)
  }

  saveCategory(category): Observable<Category> {
    return this.httpClient.post<Category>(this.API_URL, category);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.httpClient.put<Category>(this.API_URL + '/' + id, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.httpClient.delete<Category>(this.API_URL + '/' + id);
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Category[]>(this.API_URL);
  }

}
