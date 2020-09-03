import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  { path: '', component: MovieGridComponent },
  { path: 'new', component: NewMovieComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
