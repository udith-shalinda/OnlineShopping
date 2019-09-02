import { CanActivate } from '@angular/router/src/utils/preactivation';
import{ ActivatedRouteSnapshot, RouterStateSnapshot, Router,} from "@angular/router";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;
    
    
    constructor(private authService: AuthService,private router:Router){}

    canActivate(
        route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot
    ):boolean | Observable<boolean> | Promise<boolean>{
        const isAuth = this.authService.getIsAuthed();
        if(!isAuth){
            this.router.navigate(["/signIn"]);
        }
        return isAuth;
    }


}