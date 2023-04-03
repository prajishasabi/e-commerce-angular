import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
constructor(private api: ApiService){}
customerId: any = localStorage.getItem('customer_token')

submit(form_data :NgForm){
  this.api.changePassword(form_data,this.customerId).subscribe((res:{'msg':string})=>
  {
    console.log(res.msg)
  })
   
  


}

}
