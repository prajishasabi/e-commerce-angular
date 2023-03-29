import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {
  baseUrl = "http://127.0.0.1:8000/ang_eco_admin/"

  constructor( private http:HttpClient) { }
  addCategory(formdata : any): Observable<any>{
    return this.http.post(this.baseUrl+'add_category',formdata)
  }
}
