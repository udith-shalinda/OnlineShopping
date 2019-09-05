import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProductData } from './product-module';
import {map} from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({providedIn:'root'})
export class ProductService{
    items :any[] = [];
    itemSub=new Subject<{list:any[],maxPosts:number}>();
    totalPrice="";

      constructor(
        private http:HttpClient,
        private router:Router,
      ){}

      addItem(name:string ,price:string, image:File[] | string[],discription:string,discount:string,category:string){
        let newData : ProductData | FormData;
        if(typeof image[0] === 'object'){
            newData = new FormData();
            newData.append("name",name);
            newData.append("price",price);
            newData.append('discount',discount);
            newData.append('discription',discription);
            newData.append('category',category);            
            newData.append("imageOne",image[0],name+"1");
            newData.append("imageOne",image[1],name+"2");
            newData.append("imageOne",image[2],name+"3");
        }
        // else{
        //     newData ={
        //         _id:null,
        //         name:name,
        //         price:price,
        //         images:image,
        //         creater:null
        //     };
        // }
        this.http.post('http://localhost:5000/item/addItem',newData)
        .subscribe((responseData)=>{
            this.router.navigate(["/"]);
            console.log(responseData);
        });
        console.log('hello image is an object'+ newData)

      }
      getAllItems(postPerPage:number,currentPage:number){
        const queryParams = `?pageSize=${postPerPage}&page=${currentPage}`;
        this.http.get<{message:string,item:any[]}>('http://localhost:5000/item/getAll'+queryParams)
        .pipe(map((postdata)=>{
          return {post:postdata.item.map(post=>{
              return {
                  name:post.name,
                  price:post.price,
                  id:post._id,
                  imageList:[post.imageOne,post.imageTwo,post.imageThree],
                  creater:post.creater,
                  imageOne:post.imageOne
              };
          })};
       }))
        .subscribe((response)=>{
          console.log(response.post);
          this.items = response.post;
          this.itemSub.next({
            list:[...this.items],
            maxPosts:this.items.length
          })
        });
      }
      getItemsUpdateListener(){
        return this.itemSub.asObservable();
      }
      getItemById(id:string){
        return this.http.get<{item:any}>('http://localhost:5000/item/getItemById/'+id);
      }
      addToCart(itemId:string){
        const newData={
          itemId:itemId,
        }
        this.http.post('http://localhost:5000/item/addToCart',newData)
        .subscribe(response=>{
          console.log(response);
        });
      }
      getMyCart(){
        return this.http.get<{result:any}>('http://localhost:5000/item/getMyCart');
      }
      setPrice(price:string){
        this.totalPrice = price;
      }
      getPrice(){
        return this.totalPrice;
      }
}