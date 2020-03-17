import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthUserGuard } from './guards/auth-user.guard';
import { LoginAuthGuard } from './guards/login-auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
    canActivate: [LoginAuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./modules/auth-user/auth-user.module').then(m => m.AuthUserModule),
    canActivate: [AuthUserGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
