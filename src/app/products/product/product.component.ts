import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  element:{title:string,discription:string}[];
  id:string;
  paramsSubscription:Subscription;

  
  constructor(private router:Router,private route : ActivatedRoute,private productService :ProductService) { }

  ngOnInit() {
    this.id=this.route.params['id'];
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          if(this.id=='New'){
            this.element = this.productService.tshirts;
          }else if(this.id=='Shirt'){
            this.element = this.productService.products;
          }else if(this.id=='Tshirt'){
            this.element = this.productService.tshirts;
          }else{
            this.element = this.productService.products; 
          }
        }
      );
    
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }

}
