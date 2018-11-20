import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { User } from '@app-core/models';
import {Store, ActionsSubject, select} from '@ngrx/store';

import {State} from '../store';
import {ActivatedRoute, Router} from '@angular/router';

import * as fromUsers from '@app-users-store';
import {UsersActionTypes, Put, PutSuccess} from '@app-users-store/actions/users-actions';
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
    this.redirectSub = this.actionsSubject.pipe(
      ofType(UsersActionTypes.PUT_SUCCESS),
    ).subscribe((action: PutSuccess) =>  this.router.navigate(['/']));
  }

  submitted(user: User) {
    this.store.dispatch(new Put(user));

  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }
}
