mainApp.controller('PreviewSummaryCtrl',
    function ($scope, $rootScope, movieDetail, ticketDetails) {
        'ngInject';
        $scope.movieObj = movieDetail;
        $scope.ticketObj = ticketDetails;
        //function to make body scrollable when modal is closed
        $scope.changeOverflowScroll = function () {
            $rootScope.overflowHideBody = false;
        }
    });