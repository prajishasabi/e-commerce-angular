import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { ProductCatalogComponent } from './pages/product-catalog/product-catalog.component';
import { RecentOrderComponent } from './pages/recent-order/recent-order.component';
import { SellerHomeComponent } from './pages/seller-home/seller-home.component';
import { UpdateStockComponent } from './pages/update-stock/update-stock.component';
import { SellerComponent } from './seller.component';


const routes: Routes = [

  { path: '', redirectTo: 'home',pathMatch: 'full'}, 

  { path: "home", component: SellerComponent, canActivate:[AuthGuard],

  children:[
    { path: '', component: SellerHomeComponent, },
    { path: "add-product", component: AddProductComponent,   },
    { path: "product-catalog", component: ProductCatalogComponent,  },
    { path: "recent-order", component: RecentOrderComponent,  },
    { path: "order-history", component: OrderHistoryComponent, },
    { path: "update-stock", component: UpdateStockComponent },
    { path: "change-password",component:ChangePasswordComponent,}

  ]

}

  
    // path: '', component: SellerComponent,outlet:"outlet1" },
  
      // { path: "", redirectTo: "home", pathMatch: "full" },
      // { path: "home", component: SellerHomeComponent },
      // { path: "add-product", component: AddProductComponent },
      // { path: "product-catalog", component: ProductCatalogComponent },
      // { path: "recent-order", component: RecentOrderComponent },
      // { path: "order-history", component: OrderHistoryComponent },
      // { path: "update-stock", component: UpdateStockComponent }
    
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
