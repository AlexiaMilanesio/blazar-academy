import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  private readonly strongPasswordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  username = '';

  passwordControl = new FormControl<string>('', [
    Validators.required,
    Validators.pattern(this.strongPasswordRegex)
  ]);

  constructor(private router: Router) {}


  login() {
    console.log(this.username, this.passwordControl.value);

    if (this.username && this.passwordControl.value) {
      
      // this.router.navigate([`profile/${id}`]);
    }
  }

}
