import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home-new-releases', component: HomeComponent},
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module')
      .then(mod => mod.AuthModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
