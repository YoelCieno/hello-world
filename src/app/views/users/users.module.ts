import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {ComponentsModule} from '@app-components/components.module';
import {UsersSocketService} from '@app-core/services/users-socket.service';
import * as fromUsers from './store';

import {UsersComponent} from './users.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {UserNewComponent} from './user-new/user-new.component';
import {UsersIndexComponent} from './users-index/users-index.component';
import {UsersRoutingModule} from './users-routing.module';
import {UsersEffects} from './store/effects/users-effects';

import { OpenCloseComponent } from './open-close/open-close.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    UsersRoutingModule,
    StoreModule.forFeature('users', fromUsers.reducers),
    EffectsModule.forFeature([UsersEffects])
  ],
  declarations: [
    UsersComponent,
    UserDetailsComponent,
    UserEditComponent,
    UserNewComponent,
    UsersIndexComponent,
    OpenCloseComponent
  ],
  providers: [UsersSocketService]
})
export class UsersModule { }
