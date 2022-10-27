import {Component, OnInit} from '@angular/core';
import {Facility} from "../../model/facility";
import {FacilityService} from "../../service/facility/facility.service";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  facilities: Facility[] = [];

  constructor(private facilityService: FacilityService) {
  }

  o

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.facilityService.findAll().subscribe(value => {
      this.facilities = value;
    })
  }
}
