import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AdminApiService } from '../services/admin-api.service';

@Component({
  selector: 'app-catogory',
  templateUrl: './catogory.component.html',
  styleUrls: ['./catogory.component.scss']
})
export class CatogoryComponent {

  categoryImage : any
  constructor(private api:AdminApiService){}

  UploadImage(event: any){
    this.categoryImage = event.target.files[0]
    console.log(this.categoryImage)
  }
  submit(form_data : any){
    const uploadedData = new FormData()

    uploadedData.append('category_name',form_data['category_name'])
    uploadedData.append('category_des',form_data['category_des'])
    uploadedData.append('category_image',this.categoryImage)
    this.api.addCategory(uploadedData).subscribe((res: {message: string, status: number}) =>{
    console.log(res.message)


  })
}

}
