import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoginState } from './../store/reducers/login.reducer';
import * as fromStore from './../store';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {

  constructor(private store: Store<LoginState>, private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select<any>(fromStore.getLoginEmail).pipe(
      switchMap((user: LoginState) => {
        if (!user) {
          return of(true);
        } else {
          this.router.navigate(['repo-list']);
        }
      })
    );
  }

}
