angular
  .module('app')
  .service('movieService', function($http,getMovies) {
   var vm = this;
   vm.movieId = "";
   vm.params = "";
   vm.getMovieId = function() {
     return vm.movieId;
  };
    vm.setMovieId = function(movieId) {
      vm.movieId = movieId;
  };
    vm.getParams = function(){
      return vm.params;
    };
    vm.setParams = function(params){
      vm.params = params;
    };

});
