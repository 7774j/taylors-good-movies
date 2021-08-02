import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
// Components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserAccountComponent } from './user-account/user-account.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent
      },
      {
        path: 'signup',
        pathMatch: 'full',
        component: SignupComponent
      },
      {
        path: 'user-accounts',
        pathMatch: 'full',
        component: UserAccountComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
