import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent {
  constructor(private api: ApiService){}
  categoryLists : any
  ngOnInit(){
  
  let token_exist = !!localStorage.getItem('customer_token')

 
  this.api.listCategory().subscribe((res:{'category': Array<any>,cat_token: number})=>{
  this.categoryLists = res.category
  


  console.log(res.category)

  })

}

}
