import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItemList:any[]= [];
  isEmpty:boolean = true;
  isLoading:boolean = false;
  checked = true;

  constructor(
    private productService: ProductService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.productService.getMyCart()
    .subscribe(response=>{
      console.log(response.result);
      this.cartItemList = response.result;
      this.cartItemList.forEach(element => {
        element.isChecked = false;
      });
      this.isLoading = false;
      if(this.cartItemList.length=== 0){
        this.isEmpty = true;
      }
    });
  }
  checkoutClicked(){
    let total = 0;
    this.cartItemList.forEach(element => {
     if(element.isChecked === true){
       total += parseFloat(element.itemInfo[0].price);
     }
    });
    console.log(total);
    this.productService.setPrice(total);
    this.router.navigate(["/checkout"]);
  }
  
}
