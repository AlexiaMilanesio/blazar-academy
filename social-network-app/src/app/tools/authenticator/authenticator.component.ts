import { Component } from '@angular/core';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrls: ['./authenticator.component.css']
})
export class AuthenticatorComponent {

  state = AuthenticatorCompState.LOGIN;
  firebaseAuth: FirebaseTSAuth;
  
  constructor(private bottomSheetRef: MatBottomSheet) {
    this.firebaseAuth = new FirebaseTSAuth();
  }


  login(loginEmail: HTMLInputElement, loginPassword: HTMLInputElement) {
    let email = loginEmail.value;
    let password = loginPassword.value;
    
    if (email && password) {
      this.firebaseAuth.signInWith(
        {
          email: email,
          password: password,
          onComplete: () => {
            this.bottomSheetRef.dismiss();
          },
          onFail: (err) => {
            alert(err);
          }
        }
      )
    }
  }


  register(registerEmail: HTMLInputElement, registerPassword: HTMLInputElement, registerConfirmPassword: HTMLInputElement) {
    let email = registerEmail.value;
    let password = registerPassword.value;
    let confirmPassword = registerConfirmPassword.value;

    if (email && password && confirmPassword && password === confirmPassword) {
      this.firebaseAuth.createAccountWith( 
        {
          email: email,
          password: password,
          onComplete: () => {
            this.bottomSheetRef.dismiss();
          },
          onFail: () => {
            alert("Failed to create the account.");
          }
        }
      )
    }
  }


  resetPassword(resetEmail: HTMLInputElement) {
    let email = resetEmail.value;

    if (email) {
      this.firebaseAuth.sendPasswordResetEmail(
        {
          email: email,
          onComplete: () => {
            this.bottomSheetRef.dismiss();
          }
        }
      );
    }
  }
  

  forgotPasswordSection() {
    this.state = AuthenticatorCompState.FORGOT_PASSWORD;
  }
  createAccountSection() {
    this.state = AuthenticatorCompState.REGISTER;
  }
  loginSection() {
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
