import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatProgressBarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardItemComponent } from './components/user-card-item/user-card-item.component';
import { UsersComponent } from './containers/users/users.component';
import { RootStoreModule } from './root-store';

@NgModule({
  declarations: [AppComponent, UsersComponent, UserCardItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RootStoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
