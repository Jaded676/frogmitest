angular
  .module('app')
  .controller('SearchMovieController', function ($scope,$rootScope,$state,getMovies,movieService) {
    var vm = this;
    vm.empty = false;
    vm.params = movieService.getParams();
    getMovies.get(vm.params).then(function(data) {
      console.log(data);
      if(data.data.data.movie_count == 0){
        vm.empty = true;
      }
      else{
        vm.movies = data.data.data.movies;
        vm.empty = false;
      }
      console.log(vm.movies);
    });
    vm.goToMovie = function(movieId){
      movieService.setMovieId(movieId);
      $state.go('app.movieDetail',{id: movieId});
    };
    vm.searchMovieResults = function(search){
    }
  });
