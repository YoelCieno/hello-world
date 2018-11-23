import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsContainerComponent } from './user-details-container.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsContainerComponent;
  let fixture: ComponentFixture<UserDetailsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
