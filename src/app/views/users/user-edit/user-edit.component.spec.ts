import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditComponent } from './user-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {combineReducers, StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import * as fromUsers from '@app-users-store';
import {ActivatedRoute} from '@angular/router';
import {Actions} from '@ngrx/effects';
import {UsersEffects} from '../store/effects/users-effects';
import {HttpClientModule} from '@angular/common/http';
import {UserFormComponent} from '@app-core/components/user-form/user-form.component';
import {UsersService} from '@app-core/services/users.service';
import * as fromRoot from '@app-root-store';


describe('UserEditComponent', () => {
  let component: UserEditComponent;
  let fixture: ComponentFixture<UserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditComponent, UserFormComponent ],
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
    fixture = TestBed.createComponent(UserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
