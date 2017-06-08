angular
  .module('app')
  .controller('ContainerController', function ($scope,$rootScope,$state,getMovies,movieService) {
    var vm = this;
    vm.searchMovieResults = function(patron){
      movieService.setParams(patron);
      $state.go('app.searchMovie',{params: patron});
    }
    vm.gotoHome = function () {
      $state.go('app.movie');
    }
  });
