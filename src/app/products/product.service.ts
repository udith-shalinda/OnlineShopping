import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ProductData } from './product-module';

@Injectable({providedIn:'root'})
export class ProductService{
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
}