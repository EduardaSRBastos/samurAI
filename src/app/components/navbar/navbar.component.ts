import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  isLogoutVisible: boolean = false;
  profileButtonBorderRadius: string = "";

  @Input() userLoggedIn: boolean = false;
  @Input() username: string = "";

  toggleLogoutButton(): void {
    this.isLogoutVisible = !this.isLogoutVisible;
    this.profileButtonBorderRadius = this.isLogoutVisible ? '20px 20px 0 0' : '20px';
  }

  constructor(private userService: UserService) { }

  logout() {
    this.userService.logout();
  }
}