import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string;
  data: Object;


  constructor(private http: HttpClient) { }

  loginUser(u, p){
    let data = {
      "username": u,
      "password": p
    }
    this.apiUrl = "/api/user/login";
    return this.http.post(this.apiUrl, data);
  }
  registerUser(first, last, email, username, password){
    let data = {
      "first": first,
      "last": last,
      "email": email,
      "username": username,
      "password": password
    }
    this.apiUrl = "/api/user/signup";
    return this.http.post(this.apiUrl, data);
  }
}
