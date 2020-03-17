import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { AuthUserComponent } from './auth-user.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


const authUserRoutes: Routes = [
  {
    path: '',
    component: AuthUserComponent,
    children: [
      {
        path: 'repo-list',
        component: RepoListComponent
      },
      {
        path: 'repo-details',
        component: RepoDetailsComponent,
      },
      {
        path: '',
        redirectTo: 'repo-list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [RepoListComponent, RepoDetailsComponent, AuthUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(authUserRoutes),
    InfiniteScrollModule
  ]
})
export class AuthUserModule { }
