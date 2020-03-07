import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterUser, ResponseData, LoginUser, Product } from '../../models/app.secure.models';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SecureService {
  private url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:5000';
   }

   registerUser(user: RegisterUser): Observable<ResponseData> {
     let resp:Observable<ResponseData> =null;
     const options = {
       headers: new HttpHeaders({
         'Content-Type':'application/json'
       })
     };
     resp = this.httpClient.post<ResponseData>(`${this.url}/api/Auth/Register`, user, options);
     return resp;
   }

   loginUser(user: LoginUser): Observable<ResponseData> {
    let resp:Observable<ResponseData> =null;
    const options = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    resp = this.httpClient.post<ResponseData>(`${this.url}/api/Auth/Login`, user, options);
    return resp;
  }


  getProducts(token: string): Observable<Product[]> {
    let resp:Observable<Product[]> =null;
    const options = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    resp = this.httpClient.get<Product[]>(`${this.url}/api/Products`, options);
    return resp;
  }

}
