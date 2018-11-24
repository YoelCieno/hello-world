import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import * as fromRoot from '@app-root-store';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  template: // html
  `
    <app-toolbar [title]="currentPageTitle$ | async" ></app-toolbar>

    <div class="container mt-6 pt-5 pt-sm-1">
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  currentPageTitle$: Observable<string>;
  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.currentPageTitle$ = this.store.pipe(
      select(fromRoot.getCurrentTitle)
    );
  }
}
