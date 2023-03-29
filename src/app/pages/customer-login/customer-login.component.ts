import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent {
  constructor(private api: ApiService){}
signIn(form_data: NgForm){
  this.api.customerLogin(form_data).subscribe((res:{'statusCode':number,'C_token': number,'cname':string})=>{
    
  })



}
}
