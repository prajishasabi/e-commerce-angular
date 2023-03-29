import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-navbar',
  templateUrl: './seller-navbar.component.html',
  styleUrls: ['./seller-navbar.component.scss']
})
export class SellerNavbarComponent {
   seller_name: any
ngOnInit(){
 this.seller_name = localStorage.getItem('sellername')  
 console.log(this.seller_name)
  }

}
