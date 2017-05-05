mainApp.controller('previewOrderSummaryCtrl',
    function ($scope, getMovieName_service,getTicketObj_service) {
        'ngInject';
        $scope.movieObj = getMovieName_service.getName();
        $scope.ticketObj = getTicketObj_service.getTicketObj();
        console.log($scope.ticketObj);
    });