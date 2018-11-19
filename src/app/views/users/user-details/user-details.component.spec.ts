import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';

import {combineReducers, StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import * as fromUsers from '@app-users-store';
import {UsersEffects} from '../store/effects/users-effects';
import {Actions} from '@ngrx/effects';
import * as fromRoot from '@app-root-store';

import {HttpClientModule} from '@angular/common/http';
import {UserDetailsContainerComponent} from '@app-core/components/user-details/user-details-container.component';
import {UsersService} from '@app-core/services/users.service';


describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent, UserDetailsContainerComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        StoreModule.forRoot({
            ...fromRoot.reducers,
            'users': combineReducers(fromUsers.reducers)
        })
      ],
      providers: [
        UsersEffects,
        Actions,
        UsersService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
