import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RootStoreModule } from "./root-store";
import { UsersComponent } from './containers/users/users.component';
import { UserCardItemComponent } from './components/user-card-item/user-card-item.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserCardItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RootStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
