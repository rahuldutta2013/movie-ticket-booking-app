mainApp.controller('selectSeat_ctrl', ['$scope','dbManager_service', 'changeSeatStatus_service', 'getMovieName_service','loadSeatView_service', 
function ($scope,dbManager_service, changeSeatStatus_service, getMovieName_service,loadSeatView_service) {
    


    var movieName = getMovieName_service.getName();



    console.log('myMovie:' + movieName);
    $scope.movieName = movieName;
    $scope.quantities = [1, 2];
    
    $scope.isDisabled = false;
    $scope.rows = loadSeatView_service.findAvailSeat(movieName);
    console.log($scope.rows);
    

    $scope.selectedSeatCount = 0;
    $scope.clickSeat = function (event, seat) {
        if (!seat.seat && !$scope.isDisabled) {
            if (seat.check) {
                seat.check = false;
                $scope.selectedSeatCount--;
                console.log($scope.rows);
            } else if ($scope.selectedSeatCount < $scope.selectedVal) {
                seat.check = true;
                $scope.selectedSeatCount++;
                console.log($scope.rows);
            }
        }
    }

    $scope.confirmSeat = function () {
        var updatedSeats = changeSeatStatus_service.makeDisable($scope.rows);
        updatedSeats.movieName = movieName;
        console.log(updatedSeats);
        $scope.newSeatStatus = dbManager_service.storeDataInLocalStorage(updatedSeats, movieName);
        console.log($scope.newSeatStatus);
    }

}]);


