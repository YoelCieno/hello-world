import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users.component';
import {UserNewComponent} from './user-new/user-new.component';
import {UsersIndexComponent} from './users-index/users-index.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {TitleResolver} from '@app-core/resolvers/title.resolver';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UsersIndexComponent,
        data: {title: 'Lista de usuarios', animation: 'HomePage'},
        pathMatch: 'full',
        resolve: {title: TitleResolver},
      },
      {
        path: 'new',
        component: UserNewComponent,
        data: {title: 'Nuevo usuario', animation: 'NewPage'},
        pathMatch: 'full',
        resolve: {title: TitleResolver}
      },
      {
        path: ':userId',
        component: UserDetailsComponent,
        data: {title: 'Detalles', animation: 'DetailPage'},
        pathMatch: 'full',
        resolve: {title: TitleResolver}
      },
      {
        path: ':userId/edit',
        component: UserEditComponent,
        data: {title: 'Editar usuario'},
        pathMatch: 'full',
        resolve: {title: TitleResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
