import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { User } from '@app-core/models';
import {Store, ActionsSubject, select} from '@ngrx/store';

import {State} from '../store';
import {ActivatedRoute, Router} from '@angular/router';

import * as fromUsers from '@app-users-store';
import {UsersActionTypes, Load, Put, PutSuccess} from '@app-users-store/actions/users-actions';
import {filter} from 'rxjs/operators';
import {ofType} from '@ngrx/effects';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserEditComponent implements OnInit, OnDestroy {

  user$: Observable<User>;
  redirectSub: Subscription;

  constructor(
      public store: Store<State>,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private actionsSubject: ActionsSubject

  ) { }

  ngOnInit() {

    this.user$ = this.store.pipe(
      select(fromUsers.getCurrentUser)
    );

    // The update effect fires?
    this.redirectSub = this.actionsSubject.pipe(
        ofType(UsersActionTypes.PUT_SUCCESS),
        filter((action: PutSuccess) => action.payload.id === +this.activatedRoute.snapshot.params['userId'])
    ).subscribe(
      (action: PutSuccess) => this.router.navigate(['/users', action.payload.id])
    );

    this.activatedRoute.params.subscribe(params => {
      // update our id?
      this.store.dispatch(new Load(+params['userId']));
    });

  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

  submitted(user: User) {
    this.store.dispatch(new Put(user));
  }

}
