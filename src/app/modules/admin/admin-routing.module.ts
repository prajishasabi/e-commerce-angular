import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { ApproveSellerComponent } from './pages/approve-seller/approve-seller.component';
import { CatogoryComponent } from './pages/catogory/catogory.component';
import { ViewCustomerComponent } from './pages/view-customer/view-customer.component';
import { ViewSellerComponent } from './pages/view-seller/view-seller.component';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch:'full' },
  { path : 'home',component:AdminComponent,
  children:[
  { path:'',component:AdminHomeComponent },
  { path :'approve-seller',component:ApproveSellerComponent},
  { path :'view-seller',component:ViewSellerComponent},
  { path: 'view-customer',component:ViewCustomerComponent},
  { path: 'catogory',component:CatogoryComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
