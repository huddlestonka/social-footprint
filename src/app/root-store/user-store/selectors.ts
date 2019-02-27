import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
  } from '@ngrx/store';
  
  import { User } from '../../models/user';
  
  import { State } from './state';
  
  const getError = (state: State): any => state.error;
  
  const getIsLoading = (state: State): boolean => state.isLoading;
  
  export const selectUserState: MemoizedSelector<
    object,
    State
  > = createFeatureSelector<State>('user');

  // export const selectAllUserItems: (
  //   state: object
  // ) => User[] = featureAdapter.getSelectors(selectUserState).selectAll;
  
  export const selectUserError: MemoizedSelector<object, any> = createSelector(
    selectUserState,
    getError
  );
  
  export const selectUserIsLoading: MemoizedSelector<
    object,
    boolean
  > = createSelector(selectUserState, getIsLoading);