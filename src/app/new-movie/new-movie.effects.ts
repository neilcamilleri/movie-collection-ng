import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, EmptyError } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { MovieService } from '../movies/movie.service';
import { search, addMovieToCollection } from './new-movie.actions';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class MovieEffects {
  searchMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(search),
      mergeMap((action) =>
        this.moviesService.findMovie(action.payload).pipe(
          map((movies) => ({
            type: '[New Movie Page] Search Completed',
            payload: movies.results,
          })),

          catchError(() => {
            this.toastr.warning('Unable to fetch movies from source');
            return EMPTY;
          })
        )
      )
    )
  );

  addMovieToCollection$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addMovieToCollection),
        tap((action) => {
          this.moviesService.addToCollection(action.payload);
          this.toastr.success(
            action.payload.title + ' added to collection.',
            'Movie Added'
          );
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private moviesService: MovieService,
    private toastr: ToastrService
  ) {}
}
