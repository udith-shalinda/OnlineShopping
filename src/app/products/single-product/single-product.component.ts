import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  procuctId:string;
  paramsSubscription:Subscription;
  itemDetails:any = {
    name:'',
    _id:''
  };
  imageUrlArray= [];
  
  constructor(
    private route:ActivatedRoute,
    private productService:ProductService
  ) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params
      .subscribe( (params: Params) => {
        this.procuctId=params['id']
        }
      );
    this.productService.getItemById(this.procuctId)
    .subscribe(response=>{
      this.itemDetails= response;
      this.imageUrlArray = [this.itemDetails.imageOne,this.itemDetails.imageTwo,this.itemDetails.imageThree]
      console.log(this.itemDetails.name);
    }

    );

  }
  onDestroy(){
    this.paramsSubscription.unsubscribe();
  }

}
