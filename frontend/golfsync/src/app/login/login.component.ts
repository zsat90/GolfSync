import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = ''
  password: string = ''
  errorMessage: string = ''

  constructor(private userService: UserService){}


  login() {
    this.userService.loginUser(this.email, this.password).subscribe(

    )
  }

}
