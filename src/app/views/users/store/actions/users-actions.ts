import {Action} from '@ngrx/store';
import { User } from '@app-core/models';



export enum UsersActionTypes {

  LOAD_ALL = '[Users] LOAD ALL',
  LOAD_ALL_SUCCESS = '[Users] LOAD ALL SUCCESS',

  LOAD = '[Users] LOAD',
  LOAD_SUCCESS = '[Users] LOAD SUCCESS',

  CREATE = '[Users] CREATE',
  CREATE_SUCCESS = '[Users] CREATE SUCCESS',

  PUT = '[Users] PUT',
  PUT_SUCCESS = '[Users] PUT SUCCESS',

  DELETE = '[Users] DELETE',
  DELETE_SUCCESS = '[Users] DELETE SUCCESS',

  FAILURE = '[Users] FAILURE',

  SET_CURRENT_USER_ID = '[Users] SET CURRENT USER ID',

  // SERVER SIDE SOCKET ACTIONS

  LIVE_CREATED = '[Users] LIVE CREATED',
  LIVE_UPDATED = '[Users] LIVE UPDATED',
  LIVE_DELETED = '[Users] LIVE DELETED',

}

export class SetCurrentUserId implements Action {
  readonly type = UsersActionTypes.SET_CURRENT_USER_ID;
  constructor(public payload: number) {}
}

export class LoadAll implements Action {
  readonly type = UsersActionTypes.LOAD_ALL;
  constructor(public payload = null) {}
}

export class Load implements Action {
  readonly type = UsersActionTypes.LOAD;
  constructor(public payload: number) {}
}

export class Create implements Action {
  readonly type = UsersActionTypes.CREATE;
  constructor(public payload: User) {}
}

export class Put implements Action {
  readonly type = UsersActionTypes.PUT;
  constructor(public payload: User) {}
}

export class Delete implements Action {
  readonly type = UsersActionTypes.DELETE;
  constructor(public payload: number) {}
}

export class LoadAllSuccess implements Action {
  readonly type = UsersActionTypes.LOAD_ALL_SUCCESS;
  constructor(public payload: User[]) {}
}

export class LoadSuccess implements Action {
  readonly type = UsersActionTypes.LOAD_SUCCESS;
  constructor(public payload: User) {}
}

export class CreateSuccess implements Action {
  readonly type = UsersActionTypes.CREATE_SUCCESS;
  constructor(public payload: User) {}
}

export class PutSuccess implements Action {
  readonly type = UsersActionTypes.PUT_SUCCESS;
  constructor(public payload: User) {}
}

export class DeleteSuccess implements Action {
  readonly type = UsersActionTypes.DELETE_SUCCESS;
  constructor(public payload: number) {}
}

export class Failure implements Action {
  readonly type = UsersActionTypes.FAILURE;
  constructor (public payload: {concern: 'CREATE' | 'PUT', error: any}) {}
}

export type All =
    | SetCurrentUserId
    | LoadAll
    | Load
    | Create
    | Put
    | Delete
    | LoadAllSuccess
    | LoadSuccess
    | PutSuccess
    | CreateSuccess
    | DeleteSuccess
    | Failure;
