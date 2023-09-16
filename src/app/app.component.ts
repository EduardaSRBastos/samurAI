import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userLoggedIn: boolean = false;

  private _username: string = '';
  private _email: string = '';

  // Getter for username
  get username(): string {
    return this._username;
  }

  // Setter for username
  set username(value: string) {
    this._username = value;
  }

  // Getter for email
  get email(): string {
    return this._email;
  }

  // Setter for email
  set email(value: string) {
    this._email = value;
  }

  constructor(private router: Router) {}

  navigateToDefaultRoute() {
    if (this.userLoggedIn) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.checkUserLoggedIn();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects;
        const isLoginPage = currentUrl.includes('/login');
        const isRegisterPage = currentUrl.includes('/register');
        const isAccuracyPage = currentUrl.includes('/accuracy');

        if (!isLoginPage && !isRegisterPage && !isAccuracyPage) {
          this.navigateToDefaultRoute();
        }
      }
    });
  }

  checkUserLoggedIn() {
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');

    if ((storedUsername && storedUsername !== '') || (storedEmail && storedEmail !== '')) {
      this.userLoggedIn = true;
      this.username = storedUsername || "";
      this.email = storedEmail || "";
    }
  }

}
