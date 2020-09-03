import { Component } from '@angular/core';
import { MovieService } from '../movies/movie.service';
import { Movie } from '../movies/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss'],
  providers: [MovieService],
})
export class MovieGridComponent {
  title = 'movie-collection';
  moviesList: Movie[];
  filteredMovies: Movie[];

  constructor(movieService: MovieService, private router: Router) {
    this.moviesList = movieService.getMovies();
    this.filteredMovies = this.moviesList;
  }

  showMovie(id: number) {
    this.router.navigate(['/movie/' + id]);
  }

  search(query: string) {
    this.filteredMovies = this.moviesList.filter((m) =>
      m.title.toLowerCase().startsWith(query.toLowerCase())
    );
  }

  resetSearch() {
    this.filteredMovies = this.moviesList;
  }
}
