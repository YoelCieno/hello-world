 import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { User } from '@app-core/models';
import { UsersService } from '@app-core/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {

  @Input() users: User[];
  @Output() edit = new EventEmitter<User>();
  @Output() show = new EventEmitter<User>();
  @Output() remove = new EventEmitter<User>();

  usersTrackByFn = (index: number, user: User) => user.id;


  constructor( private usersService: UsersService) {
  }

  ngOnInit() {
  }

  showDetails(user: User) {
    this.show.emit(user);
  }

  editUser(user: User) {
    this.edit.emit(user);
  }

  deleteUser(user: User) {
    this.remove.emit(user);
  }

}
