mainApp.controller('fetchMoviesCtrl',
 function ($scope, dataService, getMovieName_service) {
        'ngInject';
    dataService.getData().then(function (data) {
        $scope.apiData = data;
    });
    
    $scope.getMovieName = function (event) {
        $scope.movieName = event.target.innerText;
        getMovieName_service.setName($scope.movieName);
    }
    

});