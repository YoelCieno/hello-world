import { NgModule } from '@angular/core';
import {UserListComponent} from '../components/user-list/user-list.component';
import {UserFormComponent} from '../components/user-form/user-form.component';
import {UserDetailsContainerComponent} from '../components/user-details/user-details-container.component';
import {ToolbarComponent} from '../components/toolbar/toolbar.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FooterComponent} from '@app-core/components/footer/footer.component';

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
export class SharedModule { }
