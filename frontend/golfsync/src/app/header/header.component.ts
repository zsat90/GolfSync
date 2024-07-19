import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private userService: UserService, private router: Router){}

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  get currentUser(): any {
    return this.userService.currentUser
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/'])
  }

}
