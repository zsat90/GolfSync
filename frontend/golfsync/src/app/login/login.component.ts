import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent{
  user: {email: string, password: string} = {
    email: '',
    password: ''

  }
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}


  login(form: NgForm) {
    if (form.valid) {
      this.userService.loginUser(this.user.email, this.user.password).subscribe(
        (res) => {
          this.router.navigate(['/']);
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    } else {
      this.errorMessage = 'Please fill out form correctly';
    }
  }
}
