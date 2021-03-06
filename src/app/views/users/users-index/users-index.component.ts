import {ChangeDetectionStrategy, Component, OnInit, Input} from '@angular/core';
import { User } from '@app-core/models';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';

import * as fromUsers from '@app-users-store';
import {Delete, SetCurrentUserId, LoadAll} from '@app-users-store/actions/users-actions';
import * as fromRoot from '@app-root-store';


@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersIndexComponent implements OnInit {


  users$: Observable<User[]>;

  constructor(public store: Store<fromRoot.State>,
              private router: Router,
              private actR: ActivatedRoute) { }

  ngOnInit() {
    this.users$ = this.store.pipe(select(fromUsers.getAllUsers));
    this.actR.params.subscribe(params => { this.store.dispatch(new LoadAll); });
  }

  editUser(user: User) {
    this.store.dispatch(new SetCurrentUserId(user.id));
    this.router.navigate(['/users', user.id, 'edit']);
  }

  showUser(user: User) {
    this.store.dispatch(new SetCurrentUserId(user.id));
    this.router.navigate(['/users', user.id]);
  }

  deleteUser(user: User) {
    const r = confirm('Are you sure?');
    if (r) { this.store.dispatch(new Delete(user.id)); }
  }

}
