import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../api/user.service';
import { AuthService } from '../api/auth.service';
import { User } from '../api/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // providers: [AuthService, UserService]
})

export class LoginComponent implements OnInit {

  isLoggedIn$!: Observable<boolean>;   
  users: User[] = [];
  username = '';
  private readonly strongPasswordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    
  passwordControl = new FormControl<string>('', [
    Validators.required,
    Validators.pattern(this.strongPasswordRegex)
  ]);

  constructor(
    private userService: UserService, 
    private authService: AuthService, 
    private router: Router
  ) {
    this.userService.getUsers().subscribe(users => {
      users.forEach(user => {
        this.users.push(user)
      })
    });
  }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; 
  }


  login() {
    console.log(this.username, this.passwordControl.value);

    if (this.username && this.passwordControl.value) {
      let foundUser = this.users.find(user => user.username === this.username);
      if (foundUser) {
        this.isLoggedIn$ = this.authService.isLoggedIn; 
        this.router.navigate([`profile/${foundUser.id}`]);
      } else {
        console.log("User not found.");
      }
    }
  }

}
