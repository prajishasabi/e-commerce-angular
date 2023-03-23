import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ApproveSellerComponent } from './pages/approve-seller/approve-seller.component';
import { ViewSellerComponent } from './pages/view-seller/view-seller.component';
import { ViewCustomerComponent } from './pages/view-customer/view-customer.component';


@NgModule({
  declarations: [
    AdminComponent,
    ApproveSellerComponent,
    ViewSellerComponent,
    ViewCustomerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
