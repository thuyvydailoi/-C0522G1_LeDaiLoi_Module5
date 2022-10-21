import {Injectable} from '@angular/core';
import {Facility} from "../model/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facility: Facility[] = [{
    facilityId: 1,
    facilityName: 'Villa Thuyen',
    area: '100m',
    cost: '1000000',
    maxPeople: '6',
    standardRoom: 'basic',
    description: '1111',
    poolArea: '111',
    numberOfFloors: '1',
    facilityFree: 'Giặt là'
  },
    {
      facilityId: 1,
      facilityName: 'Villa Thuyen',
      area: '100m',
      cost: '1000000',
      maxPeople: '6',
      standardRoom: 'basic',
      description: '1111',
      poolArea: '111',
      numberOfFloors: '1',
      facilityFree: 'Giặt là'
    },
    {
      facilityId: 1,
      facilityName: 'Villa Thuyen',
      area: '100m',
      cost: '1000000',
      maxPeople: '6',
      standardRoom: 'basic',
      description: '1111',
      poolArea: '111',
      numberOfFloors: '1',
      facilityFree: 'Giặt là'
    },
    {
      facilityId: 1,
      facilityName: 'Villa Thuyen',
      area: '100m',
      cost: '1000000',
      maxPeople: '6',
      standardRoom: 'basic',
      description: '1111',
      poolArea: '111',
      numberOfFloors: '1',
      facilityFree: 'Giặt là'
    },

    {
      facilityId: 1,
      facilityName: 'Villa Thuyen',
      area: '100m',
      cost: '1000000',
      maxPeople: '6',
      standardRoom: 'basic',
      description: '1111',
      poolArea: '111',
      numberOfFloors: '1',
      facilityFree: 'Giặt là'
    },

    {
      facilityId: 1,
      facilityName: 'Villa Thuyen',
      area: '100m',
      cost: '1000000',
      maxPeople: '6',
      standardRoom: 'basic',
      description: '1111',
      poolArea: '111',
      numberOfFloors: '1',
      facilityFree: 'Giặt là'
    }
  ]

  constructor() {
  }
}
