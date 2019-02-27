import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from "../../models/user";
import { UserStoreActions, UserStoreSelectors, RootStoreState } from '../../root-store';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  jokes$: Observable<User[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
    this.jokes$ = this.store$.pipe(
      select(UserStoreSelectors.selectAllUserItems) // using standard feature modules, not entity
    );

    this.error$ = this.store$.pipe(
      select(UserStoreSelectors.selectUserError)
    );

    this.isLoading$ = this.store$.pipe(
      select(UserStoreSelectors.selectUserIsLoading)
    );
  }

  onRefresh() {
    this.store$.dispatch(
      new UserStoreActions.LoadRequestAction()
    );
  }
}

