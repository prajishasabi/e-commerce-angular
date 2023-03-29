import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.scss']
})

export class SellerLoginComponent {
  error_msg = ''
  constructor(private api:ApiService,private router: Router) {}
  // ngOnInit(){
  //   if (!!localStorage.getItem('seller_token')){
  //     setTimeout(() => {

  //   this.router.navigate(['/seller/home'])
        
  //     }, 2000);
  //   }

  // }
  signIn(form_data: NgForm){
    this.api.sellerLogin(form_data).subscribe((res:{statusCode:number,token: number,sellerName: string})=>{
      if (res.statusCode == 200){
        localStorage.setItem('seller_token',res.token.toString())
        localStorage.setItem('sellername',res.sellerName)
        this.router.navigate(['/seller/home'])

      }
      else{
        this.error_msg = 'incorrect username or password'
      }
      

    })




  }

}
