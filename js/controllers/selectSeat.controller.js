mainApp.controller('SelectSeatCtrl', ['$scope', '$rootScope',
    'TicketManagerSvc', 'seatData', 'movieDetail','MovieDetailSvc',
    function ($scope, $rootScope,TicketManagerSvc, seatData, movieDetail,MovieDetailSvc) {
        $scope.price = movieDetail.cost;
        $scope.showTime = movieDetail.showTime;
        $scope.movieName = movieDetail.movie;
        $scope.quantities = [1, 2];
        $scope.isDisabled = false;
        $scope.rows = seatData;
        $scope.selectedSeatCount = 0;
        $scope.clickSeat = function (seat) {
            if (!seat.seat && !$scope.isDisabled) {
                if (seat.check) {
                    seat.check = false;
                    $scope.selectedSeatCount--;
                    $scope.proceed = false;
                } else if ($scope.selectedSeatCount < $scope.seatsSelByUser) {
                    seat.check = true;
                    $scope.selectedSeatCount++;
                    var totPrice = $scope.seatsSelByUser * $scope.price;
                    TicketManagerSvc.setTicketObj($scope.seatsSelByUser, totPrice, $scope.rows);
                    if ($scope.selectedSeatCount == $scope.seatsSelByUser) {
                        $scope.proceed = true;
                        console.log('hello');
                    }
                }
            }
        }
        $scope.changeQty = function () {
            $scope.rows = reloadSeat(seatData);
            $scope.selectedSeatCount = 0;
            $scope.proceed = false;
        }
        var reloadSeat = function (seatData) {
            for (var i = 0; i < seatData.length; i++) {
                for (var j = 0; j < seatData[i].length; j++) {
                    if (seatData[i][j].check === true && seatData[i][j].seat === false) {
                        seatData[i][j].check = false;
                    }
                }
            }
            return seatData;
        }
        $scope.overflowHide = function () {
            $rootScope.overflowHideBody = true;
            console.log($rootScope.overflowHideBody);
        }
MovieDetailSvc.setName(movieDetail.movie,movieDetail.cost,movieDetail.showTime);
    }]);