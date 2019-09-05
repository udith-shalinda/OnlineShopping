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
  images:File[]=[];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.productForm = new FormGroup({
      'name':new FormControl(null,{validators:[Validators.required]}),
      'price':new FormControl(null,{validators:[Validators.required,Validators.pattern("^[0-9]*$"),]}),
      'discount':new FormControl(null,{validators:[Validators.required]}),
      'discription':new FormControl(null,{validators:[Validators.required]}),
      'category':new FormControl(null,{validators:[Validators.required]}),
      'image':new FormControl(null,{validators:[Validators.required]})
    })
  }
  imagePicked(event: Event) {
    // const file = (event.target as HTMLInputElement).files[0];
    // this.productForm.patchValue({ image: file });
    //  this.productForm.get("image").updateValueAndValidity();
    // const reader: FileReader = new FileReader();
    // reader.onload = (e: ProgressEvent) => {
    //   const fr: FileReader = <FileReader>e.target;
    //   // this.imagepre = fr.result;
    // };
    // reader.readAsDataURL(file);
    // to multiple uploads
    if((event.target as HTMLInputElement).files.length){
      for (var i = 0; i < (event.target as HTMLInputElement).files.length; i++) {
        this.images[i] = (event.target as HTMLInputElement).files[i];
        console.log(i);
      }
      this.productForm.patchValue({ image: this.images });
      this.productForm.get("image").updateValueAndValidity();
    }
  }
  addProduct(){
    this.productForm.get('price').updateValueAndValidity();
    this.productService.addItem(
      this.productForm.value.name,
      this.productForm.value.price,
      this.productForm.value.image,
      this.productForm.value.discription,
      this.productForm.value.discount,
      this.productForm.value.category,
    );
  }

}
