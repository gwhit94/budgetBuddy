import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
// import { AuthGuard } from '../auth.guard';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor(private userService: UserService) { }
  login(){
    event.preventDefault()
    this.userService.loginUser(this.username, this.password)
  }
  ngOnInit() {
  }
}
