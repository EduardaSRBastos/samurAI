import { Component, Input } from '@angular/core';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  showRegisterMessage: boolean = false;
  showUsernameError: boolean = false;
  showEmailError: boolean = false;
  showPasswordError: boolean = false;
  showConfirmPasswordError: boolean = false;

  @Input() user: User = {
    username: "",
    email: "",
    password: "",
  };

  confirmPassword: string = "";

  passwordButton(): void {
    if (this.user.password === '*********') {
      this.user.password = '123456789';
    } else {
      this.user.password = '*********';
    }
  }

  registerMessage(): void {
    this.showRegisterMessage = true;
  }
  
  constructor(private userService: UserService) {}

  register(user: User) {
    this.registerMessage();
    console.log("user: ",user);
    this.userService.register(user);
  }

  usernameFocus(): void {
    this.showUsernameError = false;
  }

  emailFocus(): void {
      this.showEmailError = false;
  }

  passwordFocus(): void {
    this.showPasswordError = false;
  }

  confirmPasswordFocus(): void {
    this.showConfirmPasswordError = false;
  }

  registerClicked(): void {
    if(this.user.username === "") {
      this.showUsernameError = true;
    } 

    if(this.user.email === "" || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.user.email)) {
      this.showEmailError = true;
    } 
    
    if (this.user.password === "" || this.user.password.length < 8) {
      this.showPasswordError = true;
    } 

    if (this.confirmPassword === "" || this.user.password !== this.confirmPassword) {
      this.showConfirmPasswordError = true;
    } 
    
    if (!(this.showEmailError || this.showConfirmPasswordError || this.showPasswordError || this.showUsernameError)) {
      this.register(this.user);
    }
  }

}
