import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm : FormGroup;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.productForm = new FormGroup({
      'name':new FormControl(''),
      'price':new FormControl(''),
      'image':new FormControl(null)
    })
  }
  addProduct(){
    this.productService.addItem(
      this.productForm.value.name,
      this.productForm.value.price,
      this.productForm.value.image
    );
  }

}
