import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RootStoreModule } from "./root-store";
import { UsersComponent } from './containers/users/users.component';
import { UserCardItemComponent } from './components/user-card-item/user-card-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserCardItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RootStoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
