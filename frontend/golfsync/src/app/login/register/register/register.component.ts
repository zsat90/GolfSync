import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { Users } from '../../../models/users.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: Users = {username: '', email: '', password: ''}
  errorMessage: string = ''


  constructor(private userService: UserService, private router: Router){}

  onSubmit(form: NgForm): void {
    if (form.invalid){
      return
    }

    this.userService.registerUser(this.user.username, this.user.email, this.user.password).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err) => this.errorMessage = err.error.message || 'Registration failed'    
    })

  }


}
