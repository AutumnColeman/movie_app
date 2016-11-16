var app = angular.module("MovieApp", []);

app.factory('MovieService', function($http) {
  var service = {};
  var API_KEY = '8fa482ca4a8b8964d4f857eee886e8e9';
  service.nowPlaying = function() {
    var url = 'http://api.themoviedb.org/3/movie/now_playing';
    return $http({
      method: 'GET',
      url: url,
      params: { api_key: API_KEY }
    });
  };

  service.movieDetails = function(movieId) {
    var url = 'http://api.themoviedb.org/3/movie/' + movieId;
    return $http({
      method: 'GET',
      url: url,
      params: { api_key: API_KEY }
    });
  };
  return service;
});

app.controller('MainController', function($scope, MovieService) {
    $scope.clickNowPlaying = function(){
        MovieService.nowPlaying()
            .success(function(movieResults) {
                // got movie results
                // $scope.nowMovies = movieResults;
                console.log('Movie results', movieResults);
            });
    };

    $scope.clickMovieDetails = function() {
      MovieService.movieDetails($scope.id)
          .success(function(movieDetails) {
            //give movie details, I hope
            console.log('Movie details', movieDetails);
          });
    };
  });
