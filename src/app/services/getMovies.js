angular
  .module('app')
  .service('getMovies', function($http) {
  var vm = this;
  vm.get = function(params) {
      if(params){
        return $http.get('https://yts.ag/api/v2/list_movies.json?query_term='+params+'&limit=24');
      }
    else{
        return $http.get('https://yts.ag/api/v2/list_movies.json');  //1. this returns promise
      }

  };
    vm.getSingleMovie = function(id){
      var url = 'https://yts.ag/api/v2/movie_details.json?movie_id=';
      console.log(url+id);
      return $http.get(url+id);
    }
});
