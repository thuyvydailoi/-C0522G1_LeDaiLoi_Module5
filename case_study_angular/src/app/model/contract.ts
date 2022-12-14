import {Customer} from "./customer";
import {Facility} from "./facility";

export interface Contract {
  contractId?: number;
  startDate?: string;
  endDate?: string;
  deposit?: string;
  customer?: Customer;
  facility?: Facility;
}
