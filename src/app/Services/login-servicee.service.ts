// import { HttpClient } from '@angular/common/http';
// import { Injectable, inject } from '@angular/core';
// import { Observable } from 'rxjs';
// import { ILogin } from '../Models/ilogin';

// @Injectable({
//   providedIn: 'root'
// })

// export class LoginService {
// /**
//  *
//  */
// constructor() {  
// }

// private readonly http = inject(HttpClient);
// baseURL : string = 'http://localhost:4453/api/Account/login';
// login(login:any):Observable<any>{
//   return this.http.post<any>(this.baseURL,login);
// }



// }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  baseUrl: string = 'http://localhost:4453/api/Account/login';

  constructor(private http: HttpClient) {}

  login(): Observable<any> {
    return this.http.post<any>(this.baseUrl,"asdasd");
  }

  // getProductById(productId: string): Observable<IProduct> {
  //   return this.http.get<IProduct>(`${this.baseUrl}/${productId}`);
  // }

  // addProduct(product: any): Observable<IProduct> {
  //   return this.http.post<IProduct>(this.baseUrl, product);
  // }

  // editProduct(productId: string, product: any) {
  //   return this.http.put(`${this.baseUrl}/${productId}`, product);
  // }

  // deleteProduct(productId: string) {
  //   return this.http.delete(`${this.baseUrl}/${productId}`);
  // }
}