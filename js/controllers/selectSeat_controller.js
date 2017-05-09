mainApp.controller('selectSeat_ctrl', ['$scope','dbManager_service', 'changeSeatStatus_service', 'getMovieName_service',
    'loadSeatView_service', 'getTicketObj_service',
    function ($scope,dbManager_service, changeSeatStatus_service, getMovieName_service, loadSeatView_service,
        getTicketObj_service) {

        var movieObj = getMovieName_service.getName();
        var movieName = movieObj.movieName;
        // console.log(movieObj);

        $scope.price = movieObj.price;
        $scope.showTime = movieObj.showTime;
        $scope.movieName = movieName;
        $scope.quantities = [1, 2];

        $scope.isDisabled = false;
        $scope.rows = loadSeatView_service.findAvailSeat(movieName);
        // console.log($scope.rows);


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
                    getTicketObj_service.setTicketObj($scope.selectedVal, totPrice,$scope.rows);
                    if($scope.selectedSeatCount == $scope.selectedVal){
                        $scope.proceed = true;
                        console.log('hello');
                    }
                }
            }
        }

       $scope.changeQty = function(){
          
           $scope.rows = loadSeatView_service.findAvailSeat(movieName);
           $scope.selectedSeatCount = 0;
           $scope.proceed = false;
       }
        

    }]);


