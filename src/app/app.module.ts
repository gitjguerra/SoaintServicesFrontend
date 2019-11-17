import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import {CantvComponent} from './cantv/cantv.component';
import {DashboardListComponent} from './dashboard-list/dashboard-list.component';
import {ApiService} from './core/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {routing} from './app.routing';
import { FormsModule } from '@angular/forms';
import { ResponseInterceptor } from './interceptors/dashboard-list.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CantvComponent,
    DashboardListComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ResponseInterceptor,
    multi: true
  },
  ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
