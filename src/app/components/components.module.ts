import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {UserListComponent} from './user-list/user-list.component';
import {UserFormComponent} from './user-form/user-form.component';
import {UserDetailsContainerComponent} from './user-details/user-details-container.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    UserListComponent,
    UserDetailsContainerComponent,
    UserFormComponent,
    ToolbarComponent,
    FooterComponent
  ],
  exports: [
    UserListComponent,
    UserDetailsContainerComponent,
    UserFormComponent,
    ToolbarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
