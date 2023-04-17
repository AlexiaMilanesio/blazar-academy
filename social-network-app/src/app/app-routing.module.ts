import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "emailVerification",
    component: EmailVerificationComponent
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
