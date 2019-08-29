import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  first: string = '';
  last: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  constructor(private userService: UserService) { }

  register(){
    event.preventDefault()
    let result = this.userService.registerUser(this.first, this.last, this.email, this.username, this.password).subscribe({
      next(result){
        console.log(result)
      }
    })
    
  }
  ngOnInit() {
  }

}
