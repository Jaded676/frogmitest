angular
  .module('app')
  .controller('MovieDetailController', function ($scope,$rootScope,$state,$stateParams,movieService,getMovies) {
    var vm = this;
    vm.movieId = movieService.getMovieId();
    getMovies.getSingleMovie(vm.movieId).then(function(data){
    vm.movie = data.data.data.movie;
    });
    $scope.back = function() {
    $state.go('app.movie');
    };
  });
