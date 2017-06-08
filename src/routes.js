angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      abstract: true,
      templateUrl: 'app/views/container/container.html',
      controller: 'ContainerController as ctrlContainer'
    })
    .state('app.movie', {
      url: 'movies',
      views: {
        'movieView': {
          templateUrl: 'app/views/movies/movies.html',
          controller: 'MoviesController as ctrlMovies'
        }
      }
    })
    .state('app.movieDetail', {
      url: 'movieDetail/:id',
      views: {
        'movieView': {
          templateUrl: 'app/views/movieDetail/movieDetail.html',
          controller: 'MovieDetailController as ctrlMovieDetail'
        }
      }
    })
    .state('app.searchMovie', {
      url: 'searchMovie/:params',
      views: {
        'movieView': {
          templateUrl: 'app/views/searchMovie/searchMovie.html',
          controller: 'SearchMovieController as ctrlSearchMovie'
        }
      }
    });
  $urlRouterProvider.otherwise('/movies');
}
