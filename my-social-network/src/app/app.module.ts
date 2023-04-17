import { NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { AddressInputsComponent } from './address-inputs/address-inputs.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRouteSnapshot, RouterModule } from '@angular/router';
import { UserService } from './api/user.service';
import { map, switchMap } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ProfileComponent,
    LoginComponent,
    SignInFormComponent,
    AddressInputsComponent,
    NavbarComponent,
    PageNotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

    // ROUTES CONFIGURATION --> Could also be configured in app-routing.module.ts
    // RouterModule.forRoot([
    //   {
    //     path: "login",
    //     component: LoginComponent,
    //   },
    //   {
    //     path: "profile/:id",
    //     component: ProfileComponent,
    //     resolve: {
    //       user: (snapshot: ActivatedRouteSnapshot) => {
    //         const id: string = snapshot.params["id"]; // .params(id) --> error because of typescript --> tsconfig.json
    //         const userService = inject(UserService);
    //         return userService
    //           .getUsers()
    //           .pipe(map((users) => users.find((u) => u.id === Number(id))));
    //       },    
    //       posts: (snapshot: ActivatedRouteSnapshot) => {
    //         const id: string = snapshot.params["id"];
    //         const userService = inject(UserService);
    //         return   userService
    //           .getUsers()
    //           .pipe(
    //             map((users) => users.find((u) => u.id === Number(id))!), 
    //             switchMap((user) => userService.getPostsByUserId(user.id))
    //           );
    //       }
    //     }
    //   },
    //   {
    //     path: "sign-in",
    //     component: SignInFormComponent,
    //   },
    // ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
