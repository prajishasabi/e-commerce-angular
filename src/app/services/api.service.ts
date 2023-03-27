import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

}
