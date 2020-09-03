import { Injectable } from '@angular/core';
import { MockMovies } from './mock-movies';
import { HttpClient } from '@angular/common/http';
import { TMDBResponse, TMDBMovie, TMDBSingleResponse } from './tmdb-result';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Movie } from '../movies/movie';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(
    private http: HttpClient,
    private storage: LocalStorageService,
    private toastr: ToastrService
  ) {}

  findMovie(query: string) {
    return this.http.get<TMDBResponse>(
      'https://api.themoviedb.org/3/search/movie?api_key=b57b192257e7e93c636c59c8ccd2d366&language=en-US&page=1&include_adult=false&query=' +
        query
    );
  }

  getById(id: number) {
    return this.http
      .get<TMDBSingleResponse>(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b57b192257e7e93c636c59c8ccd2d366&language=en-US`
      )
      .pipe(
        tap((_) => console.log(`fetched tmdbSingleResponse id=${id}`)),
        catchError(this.handleError<TMDBSingleResponse>(`getMovieDetail ${id}`))
      );
  }

  getMovies(): Movie[] {
    try {
      return this.storage.retrieve('collection') || [];
    } catch (error) {}
  }

  removeFromCollectionById(id: number) {
    try {
      const collection = this.storage.retrieve('collection') || [];

      const updatedCollection = collection.filter((m) => m.tmdbId !== id);

      this.storage.store('collection', updatedCollection);
      this.toastr.success(`Movie removed`);
    } catch (error) {
      this.toastr.warning(`Movie could not be removed from collection`);
    }
  }

  addToCollection(movie: TMDBMovie) {
    try {
      const collection = this.storage.retrieve('collection') || [];

      collection.push({
        title: movie.title,
        year: movie.release_date,
        posterPath: movie.poster_path,
        backdropPath: movie.backdrop_path,
        overview: movie.overview,
        tmdbId: movie.id,
      });

      this.storage.store('collection', collection);
    } catch (error) {}
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.toastr.warning(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
