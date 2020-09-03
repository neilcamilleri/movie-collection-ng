import { createAction, props } from '@ngrx/store';

export const load = createAction('[Movie Grid] Load');
export const sort = createAction('[Movie Grid] Sort', props<{ by: string }>());
