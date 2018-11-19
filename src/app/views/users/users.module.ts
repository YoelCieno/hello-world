import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from './users.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {UserNewComponent} from './user-new/user-new.component';
import {UsersIndexComponent} from './users-index/users-index.component';
import {SharedModule} from '@app-core/modules/shared.module';
import {UsersRoutingModule} from './users-routing.module';
import {StoreModule} from '@ngrx/store';
import * as fromUsers from './store';
import {EffectsModule} from '@ngrx/effects';
import {UsersEffects} from './store/effects/users-effects';
import {UsersSocketService} from '@app-core/services/users-socket.service';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    StoreModule.forFeature('users', fromUsers.reducers),
    EffectsModule.forFeature([UsersEffects])
  ],
  declarations: [
    UsersComponent,
    UserDetailsComponent,
    UserEditComponent,
    UserNewComponent,
    UsersIndexComponent
  ],
  providers: [UsersSocketService]
})
export class UsersModule { }
