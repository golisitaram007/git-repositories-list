import { Action } from '@ngrx/store';

export enum LoginActionTypes {
    LOGIN = '[LOGIN PAGE] User Login'
}

export class Login implements Action {
    readonly type = LoginActionTypes.LOGIN;
    constructor(public payload: {email: string, password: string}) { }
}

export type LoginActions = Login;