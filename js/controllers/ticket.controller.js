mainApp.controller('confirmBookingCtrl',
    function ($scope, getTicketObj_service, changeSeatStatus_service, dbManager_service,getMovieName_service) {
        'ngInject';

        $scope.ticketData = getTicketObj_service.getTicketObj();
        console.log($scope.ticketData);

        var movieObj = getMovieName_service.getName();
        var movieName = movieObj.movieName;

        $scope.confirmSeat = function () {
            var updatedSeats = changeSeatStatus_service.makeDisable($scope.ticketData.currentSeat);
            updatedSeats.movieName = movieName;
            // console.log(updatedSeats);
            $scope.newSeatStatus = dbManager_service.storeDataInLocalStorage(updatedSeats, movieName);
            // console.log($scope.newSeatStatus);
        }
        $scope.confirmSeat();

    }
);