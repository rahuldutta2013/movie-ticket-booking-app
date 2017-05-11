mainApp.controller('fetchMoviesCtrl',
 function ($scope,message,getMovieName_service) {
        'ngInject';
    $scope.apiData = message;
    $scope.getMovieName = function (event) {
        $scope.movieName = event.target.innerText;
    for(var i = 0;i < $scope.apiData.movies.length;i++){
        if($scope.apiData.movies[i].movie == $scope.movieName){
            $scope.price = $scope.apiData.movies[i].cost;
            $scope.showtime = $scope.apiData.movies[i].showTime;
        }
    }
        getMovieName_service.setName($scope.movieName,$scope.price,$scope.showtime);
    }
    

});