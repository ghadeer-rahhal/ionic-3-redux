import {User} from "./user";
import {Action} from "@ngrx/store";

export const UserActionTypes = {
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_ERROR: 'USER_LOGIN_ERROR'
};

export interface UserState {
  loading: boolean,
  error: boolean,
  user: User
}

const initialState: UserState = {
  loading: false,
  error: false,
  user: null
};

export class LoginAction implements Action {
  type = UserActionTypes.USER_LOGIN;
  user:User;

  constructor(public email:string, public password:string) {

  }
}

export function userReducer(state: any = initialState, action: LoginAction) {

  switch (action.type) {
    case UserActionTypes.USER_LOGIN:
      return {...state, loading: true};

    case UserActionTypes.USER_LOGIN_SUCCESS:
      return {...state, user: action.user, loading: false};

    case UserActionTypes.USER_LOGIN_ERROR:
      return {...state, loading: false, error: true};

    default:
      return state;
  }
}
