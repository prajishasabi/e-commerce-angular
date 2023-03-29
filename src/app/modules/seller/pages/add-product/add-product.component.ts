import { Component } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  constructor(private service: SellerService){}

  categoryList: any
  token : any
  productPic: any

  ngOnInit(){

    this.service.loadCategory().subscribe((res:{category: Array<any>})=>{

      console.log(res.category)

      this.categoryList = res.category
      this.token = localStorage.getItem('seller_token')
      console.log(this.token)
    })

  }
  Uploadimage(event: any){
    this.productPic = event.target.files[0]
    console.log(this.productPic)
  }
  submit(form_data: any){
     const uploadedData = new FormData()
     uploadedData.append('seller',this.token)
     uploadedData.append('product_name',form_data['product_name'])
     uploadedData.append('category',form_data['category'])
     uploadedData.append('product_no',form_data['product_no'])

     uploadedData.append('product_des',form_data['product_des'])

     uploadedData.append('price',form_data['price'])

     uploadedData.append('stock',form_data['stock'])
     uploadedData.append('product_image',this.productPic)
     this.service.addProduct(uploadedData).subscribe((res: {statusCode: number}) =>{
      console.log(res.statusCode)
     })
     






  }
}
