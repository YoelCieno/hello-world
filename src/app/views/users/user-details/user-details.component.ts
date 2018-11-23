import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Store, ActionsSubject, select} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import { User } from '@app-core/models';


import * as fromUsers from '@app-users-store';
import {
  UsersActionTypes,
  Delete,
  DeleteSuccess,
  Load,
  SetCurrentUserId
} from '@app-users-store/actions/users-actions';
import * as fromRoot from '@app-root-store';
import {filter} from 'rxjs/operators';
import {ofType} from '@ngrx/effects';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  user$: Observable<User>;
  redirectSub: Subscription;

  constructor(
      private store: Store<fromRoot.State>,
      private actR: ActivatedRoute,
      private router: Router,
      private actionsSubject: ActionsSubject
  ) {}

  ngOnInit() {

    this.user$ = this.store.pipe(
      select(fromUsers.getCurrentUser)
    );

    // If the destroy effect fires, we check if the current id is the one being viewed, and redirect to index
    this.redirectSub = this.actionsSubject.pipe(
      ofType(UsersActionTypes.DELETE_SUCCESS),
      filter((action: DeleteSuccess) =>
        action.payload === +this.actR.snapshot.params['userId'])
    ).subscribe(_ => this.router.navigate(['/users']));

    this.redirectSub = this.actionsSubject.pipe(
      filter(action => action.type === UsersActionTypes.DELETE_SUCCESS),
    ).subscribe(_ => this.router.navigate(['/users']));

    this.actR.params.subscribe(params => {
      // update our id from the backend in case it was modified by another client
      this.store.dispatch(new Load(+params['userId']));
    });
  }

  editUser(user: User) {
    this.store.dispatch(new SetCurrentUserId(user.id));
    this.router.navigate(['/users', user.id, 'edit']);
  }

  deleteUser(user: User) {
    const r = confirm('Are you sure?');
    if (r) { this.store.dispatch(new Delete(user.id)); }
  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }


}
