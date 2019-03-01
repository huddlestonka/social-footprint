import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function featureReducer(state = initialState, action: Actions): State {
   switch (action.type) {
      case ActionTypes.LOAD_REQUEST:
        return {
          ...state,
          error: null,
          isLoading: true
        };
      case ActionTypes.LOAD_SUCCESS:
        return {
          ...state,
          // load the user payload
          user: action.payload.item,
          error: null,
          isLoading: false,

        };
      case ActionTypes.LOAD_FAILURE:
        return {
          ...state,
          error: action.payload.error,
          isLoading: false
        };
      default: {
         return state;
      }
    }
 }