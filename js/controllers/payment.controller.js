mainApp.controller('PaymentCtrl', function($scope, ticketDetails) {
    $scope.phone = '1234567890';
    $scope.email = 'abc@xyz.com';
    $scope.cardNumber = '45811223442343434';
    $scope.expiry = '12';
    $scope.cvv = '555';
    console.log($scope.cvv);
});