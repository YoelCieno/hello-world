import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNewComponent } from './user-new.component';
import {ReactiveFormsModule} from '@angular/forms';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromUsers from '@app-users-store';
import {RouterTestingModule} from '@angular/router/testing';
import {Actions} from '@ngrx/effects';
import {UsersEffects} from '../store/effects/users-effects';
import {HttpClientModule} from '@angular/common/http';
import {UserFormComponent} from '@app-core/components/user-form/user-form.component';
import {UsersService} from '@app-core/services/users.service';
import * as fromRoot from '@app-root-store';


describe('UserNewComponent', () => {
  let component: UserNewComponent;
  let fixture: ComponentFixture<UserNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNewComponent, UserFormComponent ],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({
          ...fromRoot.reducers,
          'users': combineReducers(fromUsers.reducers)
        }),
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        UsersEffects,
        Actions,
        UsersService,
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
