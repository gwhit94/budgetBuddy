import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { currentUser } from './current-user.interface'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string;
  data: Object;
  currentUser: currentUser;


  constructor(private http: HttpClient, private router: Router) { }

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
        this.router.navigateByUrl('/main')
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
}
