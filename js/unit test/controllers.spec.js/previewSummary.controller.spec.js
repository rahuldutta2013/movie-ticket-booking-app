describe('PreviewSummaryCtrl Test', function () {
    var ctrl, controller, rootScope, scope;
    beforeEach(function () {
        angular.mock.module('myApp', function ($provide) {
            $provide.service('movieDetail', function () {
                return {
                    name: 'bahubali'
                }
            });
            $provide.service('ticketDetails', function () {
                return {
                    seat: true
                }
            });
        });
    });
     // while creating the controller we have to inject the dependencies too.
    beforeEach(angular.mock.inject(function ($rootScope, _$controller_, movieDetail, ticketDetails) {
        scope = $rootScope.$new();
        rootScope = $rootScope;
        controller = _$controller_;  
        ctrl = controller('PreviewSummaryCtrl',
            { $scope: scope });
    }));

    //test spec
    it('overflowHideBody check', function () {
        scope.changeOverflowScroll();
        expect(rootScope.overflowHideBody).toBe(false);
    })

    it('check movieDetail and ticketDetails', function () {  
        expect(scope.movieObj.name).toBe('bahubali');
        expect(scope.ticketObj.seat).toBe(true);
    })
});
