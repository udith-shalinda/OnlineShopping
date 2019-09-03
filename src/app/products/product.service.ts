import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProductData } from './product-module';
import { Subscription, Subject } from 'rxjs';

@Injectable({providedIn:'root'})
export class ProductService{
    items :any[] = [];
    itemSub=new Subject<{list:any[],maxPosts:number}>();

    products=[
        {
          title:'Card title1',
          discription:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          title:'Card title2',
          discription:"Some quick example text  content.",
        },
        {
          title:'Card title3',
          discription:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        }
      ]
      tshirts=[{
        
          title:'Card title1',
          discription:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          title:'Card title2',
          discription:"Some quick example text  content.",
      }];

      constructor(
        private http:HttpClient,
        private router:Router,
      ){}

      addItem(name:string ,price:string, image:File |string){
        let newData : ProductData | FormData;
        if(typeof image === 'object'){
            newData = new FormData();
            newData.append("name",name);
            newData.append("price",price);
            newData.append("image",image,name);
        }else{
            newData ={
                _id:null,
                name:name,
                price:price,
                image:image,
                creater:null
            };
        }
        this.http.post('http://localhost:5000/item/addItem',newData)
        .subscribe((responseData)=>{
            this.router.navigate(["/"]);
            console.log(responseData);
        });
      }
      getAllItems(postPerPage:number,currentPage:number){
        const queryParams = `?pageSize=${postPerPage}&page=${currentPage}`;
        this.http.get<{message:string,item:any[]}>('http://localhost:5000/item/getAll'+queryParams)
        .subscribe((response)=>{
          console.log(response.item);
          this.items = response.item;
          this.itemSub.next({
            list:[...this.items],
            maxPosts:this.items.length
          })
        });
      }
      getItemsUpdateListener(){
        return this.itemSub.asObservable();
      }
}