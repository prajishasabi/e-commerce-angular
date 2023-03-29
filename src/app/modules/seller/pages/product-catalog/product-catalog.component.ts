import { Component } from '@angular/core';
import { SellerService } from '../../services/seller.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent {
  constructor(private service:SellerService){}
  ProductLists: any
  
ngOnInit(){
 let  sellerId = localStorage.getItem('seller_token') || null
  this.service.fetchProducts(sellerId).subscribe((res:{ products :Array<any>})=>
  {
    console.log(res.products)
    this.ProductLists = res.products

  })
}
}
