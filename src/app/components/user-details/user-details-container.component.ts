import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { User } from '@app-core/models';


@Component({
  selector: 'app-user-details-container',
  templateUrl: './user-details-container.component.html',
  styleUrls: ['./user-details-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsContainerComponent implements OnInit {

  @Input() user: User;
  @Output() edit = new EventEmitter<User>();
  @Output() remove = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {

  }

}
