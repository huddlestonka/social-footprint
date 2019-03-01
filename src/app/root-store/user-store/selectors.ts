import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';
import { User } from '../../models';
import { State } from './state';

const getError = (state: State): any => state.error;

const getIsLoading = (state: State): boolean => state.isLoading;

const getUser = (state: State): User => state.user;

export const selectUserState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('user');

export const selectUserError: MemoizedSelector<object, any> = createSelector(
  selectUserState,
  getError
);

export const selectUserIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectUserState,
  getIsLoading
);

export const selectUser: MemoizedSelector<object, User> = createSelector(
  selectUserState,
  getUser
);
