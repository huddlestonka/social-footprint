import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { User } from '../../models/user';

export const featureAdapter: EntityAdapter<
  User
> = createEntityAdapter<User>({
  selectId: model => model.id,
  sortComparer: (a: User, b: User): number =>
    b.someDate.toString().localeCompare(a.someDate.toString())
});

export interface State extends EntityState<User> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);