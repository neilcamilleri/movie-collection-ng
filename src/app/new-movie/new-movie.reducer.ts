import { Action, createReducer, on } from '@ngrx/store';
import * as NewMovieActions from './new-movie.actions';
import { TMDBMovie } from '../movies/tmdb-result';

export interface State {
  searching: boolean;
  searchResults: TMDBMovie[];
}

export const initialState: State = {
  searching: false,
  searchResults: [],
};

const newMovieReducer = createReducer(
  initialState,
  on(NewMovieActions.search, (state) => ({ ...state, searching: true })),
  on(NewMovieActions.searchCompleted, (state, search) => ({
    ...state,
    searching: false,
    searchResults: search.payload,
  })),
  on(NewMovieActions.addMovieToCollection, (state, action) => ({
    ...state,
    newMovie: action.payload,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return newMovieReducer(state, action);
}
