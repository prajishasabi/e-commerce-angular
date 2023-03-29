import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ApproveSellerComponent } from './pages/approve-seller/approve-seller.component';
import { ViewSellerComponent } from './pages/view-seller/view-seller.component';
import { ViewCustomerComponent } from './pages/view-customer/view-customer.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { CatogoryComponent } from './pages/catogory/catogory.component';
import { FormsModule } from '@angular/forms';
import { AdminNavbarComponent } from './pages/admin-navbar/admin-navbar.component';


@NgModule({
  declarations: [
    AdminComponent,
    ApproveSellerComponent,
    ViewSellerComponent,
    ViewCustomerComponent,
    AdminHomeComponent,
    CatogoryComponent,
    AdminNavbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
