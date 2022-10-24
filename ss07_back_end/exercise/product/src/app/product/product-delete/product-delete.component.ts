import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;

  productForm: FormGroup;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.productService.findById(id).subscribe(value => {
      this.productForm = new FormGroup({
        id: new FormControl(),
        name: new FormControl(),
        price: new FormControl(),
        description: new FormControl(),
        category: new FormControl()
      });
      this.productForm.patchValue(value);
      this.productForm.controls.category.setValue(value.category.name);
    }, error => {
      console.log(error);
    });
  }

  deleteProduct() {
    const product = this.productForm.value;
    this.productService.delete(product.id).subscribe(value => {
      this.router.navigateByUrl('product/list');
    })
  }
}
