import { createAction, props } from '@ngrx/store';
import { TMDBMovie } from '../movies/tmdb-result';

export const search = createAction(
  '[New Movie Page] Search',
  props<{ payload: string }>()
);

export const searchCompleted = createAction(
  '[New Movie Page] Search Completed',
  props<{ payload: TMDBMovie[] }>()
);

export const addMovieToCollection = createAction(
  '[New Movie Page] Add Movie to Collection',
  props<{ payload: TMDBMovie }>()
);

export const movieAddedToCollection = createAction(
  '[New Movie Page] Movie Added To Collection',
  props<{ payload: TMDBMovie }>()
);
