import {ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '@app-core/models';
import {ActionsSubject, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

import * as fromRoot from '@app-root-store';
import {UsersActionTypes, Create, CreateSuccess} from '@app-users-store/actions/users-actions';
import {ofType} from '@ngrx/effects';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserNewComponent implements OnInit, OnDestroy {

  redirectSub: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
    private actionsSubject: ActionsSubject
  ) { }

  ngOnInit() {
    this.redirectSub = this.actionsSubject.asObservable().pipe(
      ofType(UsersActionTypes.CREATE_SUCCESS)
    ).subscribe(
      (action: CreateSuccess) => this.router.navigate(['/'])
    );

  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

  submitted(user: User) {
    this.store.dispatch(new Create(user));
  }

}
