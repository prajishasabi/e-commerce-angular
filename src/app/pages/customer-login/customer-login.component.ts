import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent {
  error_msg = ''
  constructor(private api: ApiService, private router : Router){}
signIn(form_data: NgForm){
  this.api.customerLogin(form_data).subscribe((res:{'statusCode':number,'C_token': number,'cname':string})=>{
    if (res.statusCode == 200){
      localStorage.setItem('customer_token',res.C_token.toString())
      localStorage.setItem('customername',res.cname)

      this.router.navigate(['/home'])

    }
    else{
      this.error_msg = 'incorrect username or password'
    }
  })



}
}
