import { Action } from '@ngrx/store';
import { User } from '../../models';

export enum ActionTypes {
  LOAD_REQUEST = '[User] Load Request',
  LOAD_FAILURE = '[User] Load Failure',
  LOAD_SUCCESS = '[User] Load Success'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { user: User }) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;
