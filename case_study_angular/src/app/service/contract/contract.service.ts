import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Contract} from "../../model/contract";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private API_URL = 'http://localhost:3000/contract';

  constructor(private httpClient: HttpClient) {
  }

  findAllContract(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.API_URL);
  }
}
