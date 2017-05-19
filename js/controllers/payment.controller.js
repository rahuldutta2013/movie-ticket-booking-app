mainApp.controller('PaymentCtrl', function($scope, ticketDetails, movieDetail) {
    $scope.phone = '1234567890';
    $scope.email = 'abc@xyz.com';
    $scope.expiry = '12';
    $scope.cvv = '555';
    $scope.totalPrice = ticketDetails.totPrice;
    $scope.movieDetail = movieDetail;
});