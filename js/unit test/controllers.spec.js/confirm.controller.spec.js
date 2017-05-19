describe('ConfirmCtrl Test', function () {
    var ctrl, controller, scope;
    beforeEach(function () {
        angular.mock.module('myApp', function ($provide) {
            $provide.service('movieDetail', function () {
                return {
                    movieName: 'bahubali'
                }
            });
            $provide.service('ticketDetails', function () {
                this.currentSeat = {
                    seatNo: 1,
                    check: true,
                    seat: true
                }
            });
            $provide.service('SeatStatusSvc', function () {
                this.makeDisable = function (currentSeat) {
                    return currentSeat;
                }
            });
            $provide.service('DbManagerSvc', function () {
                this.storeDataInLocalStorage = function (updatedSeats, movieName) {
                    return updatedSeats;
                }
            });
        });
    });
    // while creating the controller we have to inject the dependencies too.
    beforeEach(angular.mock.inject(function
     ($rootScope, _$controller_, ticketDetails, SeatStatusSvc, DbManagerSvc, movieDetail) {
        scope = $rootScope.$new();
        controller = _$controller_;
        scope.movieObj = movieDetail;
        scope.ticketData = ticketDetails;
        var movieName = scope.movieObj.movieName,
            updatedSeats = SeatStatusSvc.makeDisable(scope.ticketData.currentSeat);
        scope.newSeatStatus = DbManagerSvc.storeDataInLocalStorage(updatedSeats, movieName);
        ctrl = controller('ConfirmCtrl',
            { $scope: scope });
    }));

    //test spec
    it('check confirmSeat', function () {
        scope.confirmSeat();
        expect(scope.newSeatStatus.check).toBe(true);
    })
});
