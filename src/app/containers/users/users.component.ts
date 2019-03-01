import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from "../../models/user";
import { UserStoreActions, UserStoreSelectors, RootStoreState } from '../../root-store';
import { UserResult } from 'src/app/models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userData$: Observable<UserResult>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
    // the source of all my woes...
    // this.userData$ = this.store$.pipe(
    //   select(UserStoreSelectors.selectAllUserItems)
    // );

    this.error$ = this.store$.pipe(
      select(UserStoreSelectors.selectUserError)
    );

    this.isLoading$ = this.store$.pipe(
      select(UserStoreSelectors.selectUserIsLoading)
    );
  }

  socialSearch() {
    this.store$.dispatch(
      new UserStoreActions.LoadRequestAction()
    );
  }
}

