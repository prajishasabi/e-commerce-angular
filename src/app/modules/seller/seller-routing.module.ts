import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { SellerHomeComponent } from './pages/seller-home/seller-home.component';
import { SellerComponent } from './seller.component';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch:'full'},
  { path:'home',component:SellerHomeComponent},
  { path:'add product',component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
