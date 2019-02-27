import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import * as featureActions from './actions';

@Injectable()
export class MyFeatureStoreEffects {
  constructor(private dataService: DataService, private actions$: Actions) {}

  @Effect()
  loginRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypes.LOAD_REQUEST
    ),
    switchMap(action =>
      this.dataService
	.login(action.payload.userName, action.payload.password)
	.pipe(
	  map(
	    user =>
	      new featureActions.LoadSuccessAction({
		user
	      })
	  ),
	  catchError(error =>
	    observableOf(new featureActions.LoadFailureAction({ error }))
	  )
	)
    )
  );
}