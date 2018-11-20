import { User } from '@app-core/models';
import {EntityState, createEntityAdapter} from '@ngrx/entity';

import {
  UsersActionTypes,
  All as AllUsersActions
} from '../actions/users-actions';

// This adapter will allow is to manipulate users (mostly CRUD operations)
export const usersAdapter = createEntityAdapter<User>({
  selectId: (user: User) => user.id,
  sortComparer: false
});

// -----------------------------------------
// The shape of EntityState
// ------------------------------------------
// interface EntityState<User> {
//   ids: string[] | number[];
//   entities: { [id: string]: User };
// }
// -----------------------------------------
// -> ids arrays allow us to sort data easily
// -> entities map allows us to access the data quickly without iterating/filtering though an array of objects

export interface State extends EntityState<User> {
  currentUserId?: number;
}

export const INIT_STATE: State = usersAdapter.getInitialState({
  currentUserId: undefined,
});



export function reducer(
  state: State = INIT_STATE,
  {type, payload}: AllUsersActions
) {

  switch (type) {

    case UsersActionTypes.SET_CURRENT_USER_ID : {
      return {
        ...state,
        currentUserId: payload
      };
    }

    case UsersActionTypes.LOAD_ALL_SUCCESS : {
      return usersAdapter.addAll(payload, state);
    }


    case UsersActionTypes.LOAD_SUCCESS : {
      return usersAdapter.addOne(payload, {
        ...state,
        currentUserId: payload.id
      });
    }

    case UsersActionTypes.CREATE_SUCCESS : {
      return usersAdapter.addOne(payload, {
        ...state
      });
    }

    case UsersActionTypes.PUT_SUCCESS : {
      return usersAdapter.updateOne(payload, state);
    }

    case UsersActionTypes.DELETE_SUCCESS : {
      return usersAdapter.removeOne(payload, state);
    }

    default: return state;

  }
}

export const getCurrentUserId = (state: State) => state.currentUserId;
