import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
 
import { AddProductComponent } from './pages/add-product/add-product.component';
import { UpdateStockComponent } from './pages/update-stock/update-stock.component';
import { ProductCatalogComponent } from './pages/product-catalog/product-catalog.component';
import { RecentOrderComponent } from './pages/recent-order/recent-order.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { SellerNavbarComponent } from './pages/seller-navbar/seller-navbar.component';
import { SellerHomeComponent } from './pages/seller-home/seller-home.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';


@NgModule({
  declarations: [
    SellerComponent,
    AddProductComponent,
    UpdateStockComponent,
    ProductCatalogComponent,
    RecentOrderComponent,
    OrderHistoryComponent,
    SellerNavbarComponent,
    SellerHomeComponent,
    ChangePasswordComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    SellerRoutingModule
  ]
})
export class SellerModule { }
