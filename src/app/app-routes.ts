import { Routes } from '@angular/router';
import { UsersComponent } from './containers/users/users.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'results',
  pathMatch: 'full'
},
{
  path: 'results',
  component: UsersComponent
}];
