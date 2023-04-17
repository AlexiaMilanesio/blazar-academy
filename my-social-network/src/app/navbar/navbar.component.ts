import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  isLoggedIn$!: Observable<boolean>;                  

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; 
  }

  onLogout(){
    this.authService.logout();                      
  }

}
