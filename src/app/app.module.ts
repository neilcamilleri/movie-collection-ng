import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieEffects } from './new-movie/new-movie.effects';
import { EffectsModule } from '@ngrx/effects';
import { NgxWebstorageModule } from 'ngx-webstorage';
import * as fromNewMovie from './new-movie/new-movie.reducer';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieGridComponent,
    SidebarComponent,
    NewMovieComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    NgxWebstorageModule.forRoot(),
    HttpClientModule,
    EffectsModule.forRoot([MovieEffects]),
    AppRoutingModule,
    StoreModule.forRoot({ newMovie: fromNewMovie.reducer }, {}),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
