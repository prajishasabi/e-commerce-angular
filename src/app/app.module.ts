import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomerLoginComponent } from './pages/customer-login/customer-login.component';
import { CustomerRegistrationComponent } from './pages/customer-registration/customer-registration.component';
import { SellerLoginComponent } from './pages/seller-login/seller-login.component';
import { SellerRegistrationComponent } from './pages/seller-registration/seller-registration.component';
import { MyCartComponent } from './customer/pages/my-cart/my-cart.component';
import { MyOrderComponent } from './customer/pages/my-order/my-order.component';
import { PaymentComponent } from './customer/pages/payment/payment.component';
import { OrderDetailsComponent } from './customer/pages/order-details/order-details.component';
import { ProductDetailsComponent } from './customer/pages/product-details/product-details.component';
import { ProfileComponent } from './customer/pages/profile/profile.component';
import { ChangePasswordComponent } from './customer/pages/change-password/change-password.component';
import { CustomerHomeComponent } from './customer/pages/customer-home/customer-home.component';
import { CustomerNavbarComponent } from './customer/pages/customer-navbar/customer-navbar.component';
import { CommonNavbarComponent } from './components/common-navbar/common-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    
    CustomerLoginComponent,
    CustomerRegistrationComponent,
    SellerLoginComponent,
    SellerRegistrationComponent,
    MyCartComponent,
    MyOrderComponent,
    PaymentComponent,
    OrderDetailsComponent,
    ProductDetailsComponent,
    ProfileComponent,
    ChangePasswordComponent,
    CustomerHomeComponent,
    CustomerNavbarComponent,
    CommonNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
