import { Component, Input } from '@angular/core';
import { User } from '../api/models';
import { UserService } from '../api/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})

export class SignInFormComponent {

  newUser!: User;
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {
    this.userService.getUsers().subscribe(users => {
      users.forEach(user => {
        this.users.push(user)
      })
    });
  }


  signIn(formValue: any) {
    const id = Math.floor(Math.random() * 1000);

    this.newUser = {
      id: id,
      ...formValue
    }

    this.users.push(this.newUser);  
    this.router.navigate([`profile/${this.newUser.id}`]);

    console.log(this.newUser);  
    console.log(this.users);
  }

}


/*
  {
    id: ID,              --> ID: number
    name: string,
    username: string,
    email: Email,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: Coordinates
    },
    phone?: PhoneNumber,
    website?: Website,
  }
*/