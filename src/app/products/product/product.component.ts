import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../product.service';
import { PageEvent } from '@angular/material';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  totalPosts=10;
  postsPerPage = 5;
  postsSizeOptions = [1,2,5,10];
  currentPage = 1;
  listItem :any[] = [];
  itemSub:Subscription;
  isLoading = false;
  
  constructor(
    private router:Router,
    private route : ActivatedRoute,
    private productService :ProductService
    ) { }

  ngOnInit() {
    this.isLoading = true;
    this.productService.getAllItems(3,1);
    this.itemSub = this.productService.getItemsUpdateListener().subscribe((itemData :{list:any[],maxPosts:number})=>{
      this.listItem= itemData.list;
      this.totalPosts = itemData.maxPosts;
      this.isLoading = false;
    });
    
  }

  ngOnDestroy(){
    this.itemSub.unsubscribe();
  }
  OnChangePage(pageEvent:PageEvent){
    // this.isLoading = true;
    this.currentPage = pageEvent.pageIndex+1;
    this.postsPerPage = pageEvent.pageSize;
    // this.dataservice.getdata(this.postsPerPage,this.currentPage);
  }
}
