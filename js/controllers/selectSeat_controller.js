mainApp.controller('selectSeat_ctrl', ['$scope', 'changeSeatStatus_service',
    'getTicketObj_service', 'seatData', 'movieDetail',
    function ($scope, changeSeatStatus_service,
        getTicketObj_service, seatData, movieDetail) {

        var movieObj = movieDetail;
        var movieName = movieObj.movie;

        $scope.price = movieObj.cost;
        $scope.showTime = movieObj.showTime;
        $scope.movieName = movieName;
        $scope.quantities = [1, 2];

        $scope.isDisabled = false;
        $scope.rows = seatData;

        
        $scope.selectedSeatCount = 0;
        $scope.clickSeat = function (event, seat) {
            if (!seat.seat && !$scope.isDisabled) {
                if (seat.check) {
                    seat.check = false;
                    $scope.selectedSeatCount--;
                    $scope.proceed = false;
                } else if ($scope.selectedSeatCount < $scope.selectedVal) {
                    seat.check = true;
                    $scope.selectedSeatCount++;
                    // console.log($scope.rows);

                    var totPrice = $scope.selectedVal * $scope.price;
                    getTicketObj_service.setTicketObj($scope.selectedVal, totPrice, $scope.rows);
                    if ($scope.selectedSeatCount == $scope.selectedVal) {
                        $scope.proceed = true;
                        console.log('hello');
                    }
                }
            }
        }

        $scope.changeQty = function () {
            $scope.rows = $scope.reloadSeat(seatData);
            $scope.selectedSeatCount = 0;
            $scope.proceed = false;
        }


        $scope.reloadSeat = function (seatData) {
            for (var i = 0; i < seatData.length; i++) {
                for (var j = 0; j < seatData[i].length; j++) {
                    if (seatData[i][j].check === true && seatData[i][j].seat === false) {
                        seatData[i][j].check = false;
                    }
                }
            }
            return seatData;
        }



    }]);


