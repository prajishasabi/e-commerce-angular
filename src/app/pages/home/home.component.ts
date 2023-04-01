import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router){}
tokenExist:any
  ngOnInit(){
     this.tokenExist = !!localStorage.getItem('customer_token')
  }
  

  goToSellerLogin(){
    this.router.navigate(['seller-login'])
  }
  goToCustomerLogin(){
    this.router.navigate(['customer-login'])
  }
}
