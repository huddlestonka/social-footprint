import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './containers/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'results', pathMatch: 'full' },
  {
    path: 'results',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
