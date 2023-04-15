import { Component } from '@angular/core';

@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrls: ['./authenticator.component.css']
})
export class AuthenticatorComponent {

  state = AuthenticatorCompState.LOGIN;


  forgotPassword() {
    this.state = AuthenticatorCompState.FORGOT_PASSWORD;
  }

  createAccount() {
    this.state = AuthenticatorCompState.REGISTER;
  }

  login() {
    this.state = AuthenticatorCompState.LOGIN;
  }


  isLoginState() {
    return this.state == AuthenticatorCompState.LOGIN;
  }

  isRegisterState() {
    return this.state == AuthenticatorCompState.REGISTER;
  }

  isForgotPasswordState() {
    return this.state == AuthenticatorCompState.FORGOT_PASSWORD;
  }


  getStateText() {
    switch(this.state) {
      case AuthenticatorCompState.LOGIN:
        return "Login";
      case AuthenticatorCompState.REGISTER:
        return "Create account";
      case AuthenticatorCompState.FORGOT_PASSWORD:
        return "Reset password";
    }
  }
}


export enum AuthenticatorCompState {
  LOGIN,
  REGISTER, 
  FORGOT_PASSWORD
}
