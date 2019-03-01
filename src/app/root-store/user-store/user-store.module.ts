import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserStoreEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('user', featureReducer),
    EffectsModule.forFeature([UserStoreEffects])
  ],
  providers: [UserStoreEffects]
})
export class UserStoreModule { }
