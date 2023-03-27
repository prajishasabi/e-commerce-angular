import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './customer/pages/change-password/change-password.component';
import { CustomerHomeComponent } from './customer/pages/customer-home/customer-home.component';
import { MyCartComponent } from './customer/pages/my-cart/my-cart.component';
import { MyOrderComponent } from './customer/pages/my-order/my-order.component';
import { OrderDetailsComponent } from './customer/pages/order-details/order-details.component';
import { PaymentComponent } from './customer/pages/payment/payment.component';
import { ProductDetailsComponent } from './customer/pages/product-details/product-details.component';
import { ProfileComponent } from './customer/pages/profile/profile.component';
import { CustomerLoginComponent } from './pages/customer-login/customer-login.component';
import { CustomerRegistrationComponent } from './pages/customer-registration/customer-registration.component';
import { HomeComponent } from './pages/home/home.component';
import { SellerLoginComponent } from './pages/seller-login/seller-login.component';
import { SellerRegistrationComponent } from './pages/seller-registration/seller-registration.component';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch:'full'},
  { path:'home', component: HomeComponent},
  { path:'seller-login', component: SellerLoginComponent},
  { path:'customer-login', component:CustomerLoginComponent},
  { path:'customer-registration',component:CustomerRegistrationComponent},
  { path:'seller-login',component:SellerLoginComponent},
  { path:'seller-registration' , component:SellerRegistrationComponent},
  { path: 'seller', loadChildren: () => import('./modules/seller/seller.module').then(m => m.SellerModule) },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path:'customer-home',component:CustomerHomeComponent},
  { path:'my-cart',component:MyCartComponent},
  { path:'my-order',component:MyOrderComponent},
  { path:'change-password',component:ChangePasswordComponent},
  { path: 'order-details',component:OrderDetailsComponent},
  { path:'payment',component:PaymentComponent},
  { path:'product-details',component:ProductDetailsComponent},
  { path:'profile',component:ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
