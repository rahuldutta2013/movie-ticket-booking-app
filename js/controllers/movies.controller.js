mainApp.controller('MoviesCtrl',
    function ($scope, movieList) {
        'ngInject';
        $scope.movieDetail = movieList;
    });