import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItemList:any[]= [];
  isEmpty:boolean = true;
  isLoading:boolean = false;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.productService.getMyCart()
    .subscribe(response=>{
      console.log(response.result);
      this.cartItemList = response.result;
      this.isLoading = false;
      if(this.cartItemList.length=== 0){
        this.isEmpty = true;
      }
    });
  }

}
