import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "http://127.0.0.1:8000/common/"
  
  constructor(private http: HttpClient) { }

  addCustomer(formData: any): Observable<any>{
    return this.http.post(this.baseUrl+'customer_reg', formData)
  }
  addSeller(formData: any): Observable<any>{
    return this.http.post(this.baseUrl+'seller_reg', formData)
  }
  
  sellerLogin(formdata: NgForm):Observable<any>{
    return this.http.post(this.baseUrl+'seller_login',formdata)
  }
  customerLogin(formdata:NgForm):Observable<any>{
    return this.http.post(this.baseUrl+'customer_login',formdata)
  }
  listCategory():Observable<any>{
    return this.http.get(this.baseUrl+'home_category')

  }
  listproducts(categoryID:any):Observable<any>{
    return this.http.get(this.baseUrl+'view_products?cid='+categoryID)
  }

  changePassword(formdata: any, customerId : number):Observable<any>{
    return this.http.put(this.baseUrl + 'change/password/'+ customerId,formdata)
  }

  addtoCart(form_data: any): Observable<any>{
    return this.http.post(this.baseUrl +'addto_cart',form_data)

  }
 


}
