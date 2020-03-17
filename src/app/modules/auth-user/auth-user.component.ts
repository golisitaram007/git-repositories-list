import { LoginState } from './../../store/reducers/login.reducer';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from './../../store';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.scss']
})
export class AuthUserComponent implements OnInit {

  email$;
  constructor(private store: Store<LoginState>) { }

  ngOnInit() {
    this.email$ = this.store.select<any>(fromStore.getLoginEmail);
  }

}
