describe('PaymentCtrl Test', function () {
    var ctrl, controller, scope;
    beforeEach(function () {
        angular.mock.module('myApp', function ($provide) {
            $provide.service('movieDetail', function () {
                return {
                    movieName: 'bahubali'
                }
            });
            $provide.service('ticketDetails', function () {
                return {
                    seatNo: 1,
                    check: true,
                    seat: true,
                    totPrice: '200'
                };
            });
        });
    });
    // while creating the controller we have to inject the dependencies too.
    beforeEach(angular.mock.inject(function
     ($rootScope, _$controller_, ticketDetails, movieDetail) {
        scope = $rootScope.$new();
        controller = _$controller_;
        scope.movieDetail = movieDetail;
        scope.totalPrice = ticketDetails.totPrice;
        ctrl = controller('PaymentCtrl',
            { $scope: scope });
    }));

    //test spec
    it('check ticket price', function () {
        expect(scope.totalPrice).toBe('200');
    })
});
