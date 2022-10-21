import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryPageComponentComponent} from "./component/dictionary-page-component/dictionary-page-component.component";
import {DictionaryDetailComponentComponent} from "./component/dictionary-detail-component/dictionary-detail-component.component";


const routes: Routes = [
  {
    path: '',
    component: DictionaryPageComponentComponent
  },
  {
    path: 'component/detail/:id',
    component: DictionaryDetailComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
