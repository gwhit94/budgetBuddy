import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { currentUser } from './current-user.interface'
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string;
  data: Object;
  currentUser: currentUser;


  constructor( private http: HttpClient) { }

  loginUser(u, p){
    let data = {
      "username": u,
      "password": p
    }
    this.apiUrl = "/api/user/login";
    this.http.post(this.apiUrl, data).subscribe({
      next(result){
        console.log(result)
        localStorage.setItem('currentUser', JSON.stringify(result))
      }
    })

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
  logoutUser(){
    // JSON.parse()
  }
}
