import {ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    // animation triggers go here
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
  constructor() {}
}
