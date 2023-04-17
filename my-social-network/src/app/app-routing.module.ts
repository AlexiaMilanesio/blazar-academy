import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserService } from './api/user.service';
import { map, switchMap } from 'rxjs';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  { 
    path: "sign-in", 
    component: SignInFormComponent 
  },
  { 
    path: "login", 
    component: LoginComponent 
  },
  { 
    path: "profile/:id", 
    component: ProfileComponent, 
    resolve: {
      user: (snapshot: ActivatedRouteSnapshot) => {
        const id: string = snapshot.params["id"];
        const userService = inject(UserService);
        return userService
          .getUsers()
          .pipe(map((users) => users.find((u) => u.id === Number(id))));
      },
      posts: (snapshot: ActivatedRouteSnapshot) => {
        const id: string = snapshot.params["id"];
        const userService = inject(UserService);
        return userService
          .getUsers()
          .pipe(
            map((users) => users.find((u) => u.id === Number(id))!), 
            switchMap((user) => userService.getPostsByUserId(user.id))
          );
      }
    }
  },
  { 
    path: "**", 
    component: PageNotFoundComponent 
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
