import { Component, Input} from '@angular/core';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showLoginMessage: boolean = false;
  showUsernameOrEmailError: boolean = false;
  showPasswordError: boolean = false;

  @Input() user: User = {
    username: "",
    email: "",
    password: "",
  };
  usernameOrEmail: string = '';

  loginMessage(): void {
    this.showLoginMessage = true;
  }
  
  constructor(private userService: UserService) {}

  login(user: User) {
    this.loginMessage();
    console.log("user: ",user);
    this.userService.login(user);
  }

  user1: User = {
    username: "username1",
    email: "email1@bee-eng.pt",
    password: "*********"
  }

  usernameOrEmailFocus(): void {
      this.showUsernameOrEmailError = false;
  }

  passwordFocus(): void {
    this.showPasswordError = false;
}

  loginClicked(): void {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (emailRegex.test(this.usernameOrEmail)) {
      this.user.email = this.usernameOrEmail;
      this.user.username = "";
    } else {
      this.user.username = this.usernameOrEmail;
      this.user.email = "";
    }

    if(this.user.email === "" && this.user.username === "") {
      this.showUsernameOrEmailError = true;
    } 
    
    if (this.user.password === "") {
      this.showPasswordError = true;
    } 
    
    if ((this.user.email !== "" || this.user.username !== "") && this.user.password !== "") {
      this.login(this.user);
    }
  }

}
