import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent {
  seller_name : any
  ngOnInit(){
    this.seller_name = localStorage.getItem('sellername')  
    console.log(this.seller_name)
     }
}
