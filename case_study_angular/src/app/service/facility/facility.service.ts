import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facility} from "../../model/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  private API_URL = 'http://localhost:3000/facilities';
  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Facility[]>{
    return this.httpClient.get<Facility[]>(this.API_URL)
  }
}
