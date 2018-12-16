import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import * as fromRoot from '@app-root-store';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
