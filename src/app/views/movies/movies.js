angular
  .module('app')
  .controller('MoviesController', function ($scope,$rootScope,$state,getMovies,movieService) {
    var vm = this;
    getMovies.get().then(function(data) {
      console.log(data);
      vm.movies = data.data.data.movies;
      console.log(vm.movies);
    });
    vm.goToMovie = function(movieId){
    movieService.setMovieId(movieId);
    $state.go('app.movieDetail',{id: movieId});
    };
    vm.searchMovieResults = function(search){
    }
  });
