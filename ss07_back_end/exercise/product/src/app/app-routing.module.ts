import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductDeleteComponent} from "./product/product-delete/product-delete.component";
import {ProductUpdateComponent} from "./product/product-update/product-update.component";
import {CategoryListComponent} from "./category/category-list/category-list.component";
import {CategoryCreateComponent} from "./category/category-create/category-create.component";
import {CategoryDeleteComponent} from "./category/category-delete/category-delete.component";
import {CategoryUpdateComponent} from "./category/category-update/category-update.component";


const routes: Routes = [{
  path: '',
  component: ProductListComponent
}, {
  path: 'product/create',
  component: ProductCreateComponent
},
  {
    path: 'product/delete/:id',
    component: ProductDeleteComponent
  },
  {
    path: 'product/update/:id',
    component: ProductUpdateComponent
  },
  {
    path: 'category/list',
    component: CategoryListComponent
  },
  {
    path: 'category/create',
    component: CategoryCreateComponent
  },
  {
    path: 'category/edit/:id',
    component: CategoryUpdateComponent
  },
  {
    path: 'category/delete/:id',
    component: CategoryDeleteComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
