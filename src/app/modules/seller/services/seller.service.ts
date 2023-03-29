import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  baseUrl = 'http://127.0.0.1:8000/seller/'
  constructor(private http: HttpClient) { }

  loadCategory(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/ang_eco_admin/view_category')
  }

  addProduct(formData: any): Observable<any>{
    return this.http.post(this.baseUrl+'addproduct', formData)

  }
  fetchProducts(sellerId:any): Observable<any>{
    return this.http.get(this.baseUrl+'Sview_products?seller='+sellerId)

  }
}


