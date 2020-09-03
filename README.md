# Movie Collection

Creating a collection of your favourite movies is quite simple with this app. Click the plus icon in the sidebar and search for your favourite movie. The app will query the TMDB database, you can any movie to your collection from the results list.

## Features

- Find any movie (Source is TMDB)
- Manage your growing collection. Persistent storage provided via LocalStorage.
- View movie details

## Parts
- [Movie Grid](https://github.com/neilcamilleri/movie-collection-ng/tree/master/src/app/movie-grid)
- [Movie Details](https://github.com/neilcamilleri/movie-collection-ng/tree/master/src/app/movie-details)
- [New Movie](https://github.com/neilcamilleri/movie-collection-ng/tree/master/src/app/new-movie)
- [Sidebar](https://github.com/neilcamilleri/movie-collection-ng/tree/master/src/app/sidebar)
- [Movies Service](https://github.com/neilcamilleri/movie-collection-ng/tree/master/src/app/movies)


## Technologies Used

- [Angular](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Rxjs](https://github.com/ReactiveX/rxjs)
- [Sass](http://sass-lang.com/) (Scss)
- [NGRX](https://ngrx.io/)

## Data Source
<a href="https://www.themoviedb.org">
<img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" height="24">
</a>


# Development Notes

## Docker Deployment

A dockerfile is provided, simply build with docker and run to start the project in a container.

## Development server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
