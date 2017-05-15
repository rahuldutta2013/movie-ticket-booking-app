mainApp.controller('ConfirmCtrl',
    function ($scope,$state, ticketDetails, SeatStatusSvc, DbManagerSvc, movieDetail) {
        'ngInject';

        $scope.ticketData = ticketDetails;
        console.log($scope.ticketData);

        $scope.movieObj = movieDetail;
        var movieName = $scope.movieObj.movieName;

        $scope.confirmSeat = function () {
            var updatedSeats = SeatStatusSvc.makeDisable($scope.ticketData.currentSeat);
            updatedSeats.movieName = movieName;
            $scope.newSeatStatus = DbManagerSvc.storeDataInLocalStorage(updatedSeats, movieName);
        }
        $scope.confirmSeat();
    }
);