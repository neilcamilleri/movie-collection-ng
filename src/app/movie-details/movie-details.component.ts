import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movies/movie.service';
import { TMDBSingleResponse } from '../movies/tmdb-result';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movieDetails$: Observable<TMDBSingleResponse>;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.movieDetails$ = this.movieService.getById(+params.get('id'));
    });
  }

  removeFromCollection(id: number) {
    this.movieService.removeFromCollectionById(id);
    this.router.navigate(['/']);
  }
}
