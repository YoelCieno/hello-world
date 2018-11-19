import * as fromUsers from './reducers/users-reducer';
import * as fromRoot from '@app-root-store';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface UsersState {
  users: fromUsers.State;
}

// This is a lazy loaded state, so we need to extend from the App Root State
export interface State extends fromRoot.State {
  users: UsersState;
}

export const reducers = {
  users: fromUsers.reducer
};

export const getUsersRootState = createFeatureSelector<UsersState>('users');

export const getUsersState = createSelector(
    getUsersRootState,
    state => state.users
);

export const getSelectedUserId = createSelector(
  getUsersState,
  fromUsers.getCurrentUserId
);

export const {
  selectAll: getAllUsers,
  selectEntities: getUserEntities
} = fromUsers.usersAdapter.getSelectors(getUsersState);

export const getCurrentUser = createSelector(
  getUserEntities,
  getSelectedUserId,
  (entities, id) => id && entities[id]
);
