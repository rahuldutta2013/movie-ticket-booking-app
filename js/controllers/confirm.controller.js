mainApp.controller('ConfirmCtrl',
    function ($scope,ticketDetails, SeatStatusSvc, DbManagerSvc, movieDetail) {
        'ngInject';

        $scope.ticketData = ticketDetails;
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