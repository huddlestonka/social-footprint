import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import {
  RootStoreState,
  UserStoreActions,
  UserStoreSelectors
} from '../../root-store';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userData$: Observable<User>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.userData$ = this.store$.pipe(select(UserStoreSelectors.selectUser));

    this.error$ = this.store$.pipe(select(UserStoreSelectors.selectUserError));

    this.isLoading$ = this.store$.pipe(
      select(UserStoreSelectors.selectUserIsLoading)
    );
  }

  socialSearch() {
    this.store$.dispatch(new UserStoreActions.LoadRequestAction());
  }
}
