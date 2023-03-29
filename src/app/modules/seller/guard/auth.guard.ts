import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard   {

  constructor(private route: Router){}

  canActivate(){

    if (!!localStorage.getItem('seller_token') == false){
      
        this.route.navigate(['/seller-login'])
    }

    return true

  }
  
  
}
