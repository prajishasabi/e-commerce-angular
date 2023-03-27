import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-seller-registration',
  templateUrl: './seller-registration.component.html',
  styleUrls: ['./seller-registration.component.scss']
})
export class SellerRegistrationComponent {
  constructor(private api: ApiService){
  }
  sellerPic: any
  UploadImage(event: any){
    this.sellerPic = event.target.files[0]
    console.log(this.sellerPic)
  }

  signUp(form_data: any){
    const uploadedData = new FormData()
    uploadedData.append('first_name',form_data['first_name'])
    uploadedData.append('last_name',form_data['last_name'])
    uploadedData.append('email',form_data['email'])
    uploadedData.append('phone',form_data['phone'])
    uploadedData.append('address',form_data['address'])
    uploadedData.append('bank_name',form_data['bank_name'])
    uploadedData.append('branch',form_data['branch'])
    uploadedData.append('ifsc',form_data['ifsc'])
    uploadedData.append('account_no',form_data['account_no'])
    uploadedData.append('seller_pic',this.sellerPic)
    this.api.addSeller(uploadedData).subscribe((res: {message: string}) =>{

      console.log(res.message)



  })
  }
}
