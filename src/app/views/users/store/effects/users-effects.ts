import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';

import {
  UsersActionTypes,
  Create,
  CreateSuccess,
  Delete,
  DeleteSuccess,
  Failure,
  Load,
  LoadAll,
  LoadAllSuccess,
  LoadSuccess,
  Put,
  PutSuccess
} from '../actions/users-actions';

import {Actions, Effect, ofType} from '@ngrx/effects';
import { User } from '@app-core/models';
import {UsersService} from '@app-core/services/users.service';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {UsersSocketService} from '@app-core/services/users-socket.service';

@Injectable()
export class UsersEffects {

  @Effect()
  loadAll$: Observable<Action> = this.actions$.pipe(
    ofType(UsersActionTypes.LOAD_ALL), // When LOAD ALL action is dispatched
    startWith(new LoadAll()),
    switchMap(() => this.usersService.index()), /* Hit the Users Index endpoint of our REST API */
    /* Dispatch LoadAllSuccess action to the central store with id list returned by the backend as id*/
    /* 'Users Reducers' will take care of the rest */
    map((users: User[]) => new LoadAllSuccess(users))
  );

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(UsersActionTypes.LOAD),
    map( (action: Load ) => action.payload),
    switchMap((id) => this.usersService.show(id)),
    map((user: User) => new LoadSuccess(user))
  );

  @Effect()
  create$: Observable<Action> = this.actions$.pipe(
    ofType(UsersActionTypes.CREATE),
    map((action: Create) => action.payload),
    switchMap((user: User) => this.usersService.create(user).pipe(
      map(() => new CreateSuccess({
        name: user.name,
        birthdate: user.birthdate
      })),
    )),
    catchError(err => {
      console.log(err['message']);
      return of(new Failure({concern: 'CREATE', error: err}));
    })
  );

  @Effect()
  update$: Observable<Action> = this.actions$.pipe(
    ofType(UsersActionTypes.PUT),
    map((action: Put) => action.payload),
    switchMap(
      (user: User) => this.usersService.update(user).pipe(
        map(() => new PutSuccess({
          id: user.id,
          name: user.name,
          birthdate: user.birthdate
        })),
        catchError(err => {
          alert(err['message']);
          return of(new Failure({concern: 'PUT', error: err}));
        })
      )
    )
  );

  @Effect()
  destroy$: Observable<Action> = this.actions$.pipe(
    ofType(UsersActionTypes.DELETE),
    map((action: Delete) => action.payload),
    switchMap(
      (id: number) => this.usersService.destroy(id).pipe(
        map( () => new DeleteSuccess(id))
      )
    )
  );

  // Socket Live Events

  @Effect()
  liveCreate$: Observable<Action> = this.usersSocket.fromEvent(UsersActionTypes.LIVE_CREATED).pipe(
    map((user: User) => new CreateSuccess(user))
  );


  @Effect()
  liveUpdate$: Observable<Action> = this.usersSocket.fromEvent(UsersActionTypes.LIVE_UPDATED).pipe(
    map((user: User) => new PutSuccess(user))
  );

  @Effect()
  liveDestroy$: Observable<Action> = this.usersSocket.fromEvent(UsersActionTypes.LIVE_DELETED).pipe(
    map(id => new DeleteSuccess(+id))
  );


  constructor(
      private actions$: Actions,
      private usersService: UsersService,
      private usersSocket: UsersSocketService
  ) {}


}
