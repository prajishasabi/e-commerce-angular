import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss']
})
export class CustomerRegistrationComponent {
  customerPic: any
  constructor(private api: ApiService){
  }
  UploadImage(event: any){
    this.customerPic = event.target.files[0]
    console.log(this.customerPic)
  }
  signUp(form_data: any){ 
    const uploadedData = new FormData()
    uploadedData.append('first_name', form_data['first_name'])
    uploadedData.append('last_name', form_data['last_name'])
    uploadedData.append('email', form_data['email'])
    uploadedData.append('address', form_data['address'])
    uploadedData.append('password', form_data['password'])
    uploadedData.append('phone', form_data['phone'])
    uploadedData.append('customer_pic',this.customerPic)
    this.api.addCustomer(uploadedData).subscribe((res: {message: string, status: number}) =>{

      console.log(res.message)

    })






  }
 

}
