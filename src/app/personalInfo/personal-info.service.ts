import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { PersonalData } from './personal-info-model';

@Injectable({providedIn:'root'})
export class PersonalInfoService{
    personalInfo:PersonalData;

    constructor(
        private http:HttpClient,
        private router:Router,
      ){}

    savePersonalInfo(name:string,address:string,mobile:string){
        const newData:PersonalData = {
            _id:null,
            name:name,
            address:address,
            mobile:mobile,
        }
        this.http.post<{message:string}>('http://localhost:5000/personalInfo/addInfo',newData)
        .subscribe((response)=>{
            console.log(response);
            
        });   
    }
    getInfo(){
        return this.http.get<{info:any}>('http://localhost:5000/personalInfo/getInfo');
    }

}