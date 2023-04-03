import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  constructor(private api:ApiService, private activatedRoute: ActivatedRoute){}
  productlist : any
  catId: any
ngOnInit(){
// to read the query parameter from the url
  this.catId = this.activatedRoute.snapshot.queryParamMap.get('cat')
  console.log(this.catId)
  // let categoryId = localStorage.getItem('cat_token')
  this.api.listproducts(this.catId).subscribe((res: {'products':Array<any>})=>{

  this.productlist = res.products
  })

}
}
