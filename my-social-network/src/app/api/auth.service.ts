import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './models';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false); 
  
  constructor(private router: Router) {}


  get isLoggedIn() {
    return this.loggedIn; 
  }

  login(user: User){
    if (user.username && user.password) { 
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  logout() {                           
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

}