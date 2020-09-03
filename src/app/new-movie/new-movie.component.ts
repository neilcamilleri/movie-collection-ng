import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TMDBMovie } from '../movies/tmdb-result';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss'],
})
export class NewMovieComponent implements OnInit {
  moviesFound$: Observable<TMDBMovie[]>;

  constructor(private store: Store<{ newMovie: TMDBMovie[] }>) {}

  ngOnInit(): void {
    this.moviesFound$ = this.store.select((state) => state.newMovie);
  }

  search(value: string) {
    this.store.dispatch({ type: '[New Movie Page] Search', payload: value });
  }

  addMovie(movie: TMDBMovie) {
    this.store.dispatch({ type: '[New Movie Page] Add Movie to Collection', payload: movie})
  }
}
