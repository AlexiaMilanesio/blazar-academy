import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})

export class SignInFormComponent {
  
  signIn(formValue: any) {
    console.log(formValue);
  }

}


/*
  {
    id: ID,
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
    phone: PhoneNumber,
    website: Website,
  }
*/