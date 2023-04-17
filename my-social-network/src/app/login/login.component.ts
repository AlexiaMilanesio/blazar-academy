import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../api/user.service';
import { User } from '../api/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  users: User[] = [];

  private readonly strongPasswordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  username = '';

  passwordControl = new FormControl<string>('', [
    Validators.required,
    Validators.pattern(this.strongPasswordRegex)
  ]);

  constructor(private userService: UserService, private router: Router) {
    this.userService.getUsers().subscribe(users => {
      users.forEach(user => {
        this.users.push(user)
      })
    });
  }


  login() {
    console.log(this.username, this.passwordControl.value);


    if (this.username && this.passwordControl.value) {
      let foundUser = this.users.find(user => user.username === this.username);
      if (foundUser) {
        this.router.navigate([`profile/${foundUser.id}`]);
      } else {
        console.log("User not found.");
      }
    }
  }

}


 // example --> username = Bret