import { LoginActions, LoginActionTypes } from './../actions/login.actions';

export interface LoginState {
    email: string;
    password: string;
}

export const initialLoginState: LoginState = {
    email: '',
    password: ''
}

export function loginReducer(state = initialLoginState, action: LoginActions): LoginState {
    switch (action.type) {
        case LoginActionTypes.LOGIN:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};
