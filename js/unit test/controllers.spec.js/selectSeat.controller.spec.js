describe('SelectSeatCtrl Test', function () {
    var ctrl, controller, scope;
    beforeEach(function () {
        angular.mock.module('myApp', function ($provide) {

            $provide.service('TicketManagerSvc', function () {
                this.setTicketObj = function (seatsSelByUser, totPrice, rows) {
                    return totPrice;
                }
            });
            $provide.service('seatData', function () {

                return [
                    [
                        {
                            seatNo: 1,
                            check: true,
                            seat: false
                        },
                        {
                            seatNo: 2,
                            check: false,
                            seat: false
                        },

                    ],
                    [
                        {
                            seatNo: 3,
                            check: true,
                            seat: false
                        },
                        {
                            seatNo: 2,
                            check: false,
                            seat: false
                        },

                    ]
                ]

            });
            $provide.service('movieDetail', function () {
                return {
                    movie: 'bahubali',
                    cost: '100',
                    showTime: '6:30PM'
                }
            });
            $provide.service('MovieDetailSvc', function () {
                this.setName = function (movieName, cost, showTime) {
                    return cost;
                }
            });
        });
    });
    // while creating the controller we have to inject the dependencies too.
    beforeEach(angular.mock.inject(function
     ($rootScope, _$controller_, TicketManagerSvc, seatData, movieDetail, MovieDetailSvc) {
        scope = $rootScope.$new();
        rootScope = $rootScope
        controller = _$controller_;

        scope.proceed = true;

        ctrl = controller('SelectSeatCtrl',
            { $scope: scope });
    }));

    //test spec
    it('check change qty function', function () {
        scope.changeQty();
        expect(scope.proceed).toBe(false);
    })

    it('check clickSeat function', function () {
        var seat = {
            seat: false,
            check: true
        }
        scope.clickSeat(seat);
        expect(scope.proceed).toBe(false);
    })

});
