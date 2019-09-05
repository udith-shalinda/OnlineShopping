import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthData } from './auth-module';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({providedIn:'root'})
export class AuthService{
    private token:string;
    private authStatusListner = new Subject<boolean>();
    private isAuthed = false;
    private userId :string;
    private errormessageListner = new Subject<string>();

    constructor(private http:HttpClient,private router:Router){}

    getToken(){
        return this.token;
    }
    getAuthStatusListner(){
        return this.authStatusListner.asObservable();
    }
    getIsAuthed(){
        return this.isAuthed;
    }
    getUserId(){
        return this.userId;
    }
    getErrorMessage(){
        return this.errormessageListner.asObservable();
    }

    createUser(email:string,password:string){
        const authdata :AuthData = {
            email:email,
            password:password
        }
        this.http.post<{token:string,userId:string}>("http://localhost:5000/user/signup",authdata)
        .subscribe(response=>{
            if(response.token){
                this.token = response.token;
                this.isAuthed = true;
                this.authStatusListner.next(true);
                this.userId = response.userId;
                this.router.navigate(["/personalInfo"]);
            }
        },error=>{
            this.errormessageListner.next(error.error.message);
            this.authStatusListner.next(false);
        })
    }

    userLogin(email:string,password:string){
        const userdata :AuthData ={
            email:email,
            password:password
        }
        this.http.post<{ token : string ,userId:string}>("http://localhost:5000/user/login",userdata)
        .subscribe((response)=>{  
            if(response.token){
                this.token = response.token;
                this.isAuthed = true;
                this.authStatusListner.next(true);
                this.userId = response.userId;
                this.router.navigate(["/"]);
            }
        },error=>{
            this.errormessageListner.next(error.error.message);
            this.authStatusListner.next(false);
        });
    }

    Logout(){
        this.token = null;
        this.isAuthed = false;
        this.userId = null;
        this.authStatusListner.next(false);
        this.router.navigate(['/signIn']);
    }

    // DeleteAccount(){
    //     const userdata :AuthData ={
    //         email:this.userId,
    //         password:this.userId
    //     }
    //     this.http.post<{message:string}>("http://localhost:3000/user/deactivate/",userdata)
    //     .subscribe(result=>{
    //         if(result){
    //             this.token = null;
    //             this.isAuthed = false;
    //             this.userId = null;
    //             this.authStatusListner.next(false);
    //             this.router.navigate(['/signIn']);
    //         }
    //     })
    // }
}