import {ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './router.animation';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [slideInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {

  constructor(private outlet: RouterOutlet) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
