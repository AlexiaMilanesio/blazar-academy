import { Component } from '@angular/core';
import { User } from '../api/models';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})

export class SignInFormComponent {
  
  signIn(formValue: any) {
    const value: User = {
      id: Math.floor(Math.random() * 1000),
      ...formValue
    }
    console.log(value);
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