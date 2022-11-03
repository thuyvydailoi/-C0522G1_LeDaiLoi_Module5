import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SoTietKiemListComponent} from './so_tiet_kiem/so-tiet-kiem-list/so-tiet-kiem-list.component';
import {SoTietKiemEditComponent} from './so_tiet_kiem/so-tiet-kiem-edit/so-tiet-kiem-edit.component';


const routes: Routes = [
  {path: '', component: SoTietKiemListComponent},
  {path: 'edit/:id', component: SoTietKiemEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
