import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  productForm: FormGroup;
  productId: number;
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productId = Number(this.activatedRoute.snapshot.params.id);

    const product = this.productService.findById(this.productId);

    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl(),
    });

    this.getAllCategory();

  }

  updateProduct(productId: number) {
    const productObj = this.productForm.value;
    console.log("a");
    this.productService.update(productObj).subscribe(() => {
      this.router.navigateByUrl('product/list')
    })
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(value => {
      this.categories = value
    })
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
