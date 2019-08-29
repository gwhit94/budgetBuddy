import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private userService: UserService, private router: Router){
    }
    canActivate(next:ActivatedRouteSnapshot): boolean{
      let currentUser = JSON.parse(localStorage.getItem('currentUser'))
      if (currentUser){
        return true
      }
      else{
        this.router.navigateByUrl('/login')
        return false
      }
    }
  
}
