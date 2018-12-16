import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as fromRoot from '@app-root-store';
import * as fromUsers from '@app-users-store';
import { UsersIndexComponent } from './users-index.component';
import {combineReducers, StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import {UserListComponent} from '@app-components/user-list/user-list.component';


describe('UsersIndexComponent', () => {
  let component: UsersIndexComponent;
  let fixture: ComponentFixture<UsersIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [ UsersIndexComponent, UserListComponent ],
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          'users': combineReducers(fromUsers.reducers)
        }),
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
