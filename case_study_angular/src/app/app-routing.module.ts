import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FacilityComponent} from "./facility/facility-list/facility.component";
import {FacilitycreateComponent} from "./facility/facility-create/facilitycreate.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {CustomerCreateComponent} from "./customer/customer-create/customer-create.component";
import {CustomerEditComponent} from "./customer/customer-edit/customer-edit.component";
import {FacilityeditComponent} from "./facility/facility-edit/facilityedit.component";
import {ContractListComponent} from "./contract/contract-list/contract-list.component";
import {ContractCreateComponent} from "./contract/contract-create/contract-create.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'facility/list', component: FacilityComponent},
  {path: 'facility/create', component: FacilitycreateComponent},
  {path: 'facility/edit', component: FacilityeditComponent},
  {path: 'customer/list', component: CustomerListComponent},
  {path: 'customer/edit', component: CustomerEditComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'contract/list', component: ContractListComponent},
  {path: 'contract/create', component: ContractCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
