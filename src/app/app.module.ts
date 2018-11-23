import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {SocketIoModule} from 'ngx-socket-io';

import {environment} from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import * as fromRoot from '@app-root-store';
import {ComponentsModule} from './components/components.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocketIoModule,
    StoreModule.forRoot(fromRoot.reducers), /* Initialise the Central Store with Application's main reducer*/
    EffectsModule.forRoot([]), /* Start monitoring app's side effects */
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 200 }) : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
