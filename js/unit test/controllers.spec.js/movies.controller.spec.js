describe('MoviesCtrl Test', function () {
    var ctrl, controller, scope;
    beforeEach(function () {
        angular.mock.module('myApp', function ($provide) {
            $provide.service('movieList', function () {
                var movies = [
                    {
                        movie: 'bahubali'
                    },
                    {
                        movie: 'sarkar 3'
                    }
                ];
                return movies;
            });
        });
    });
    // while creating the controller we have to inject the dependencies too.
    beforeEach(angular.mock.inject(function ($rootScope,_$controller_, movieList) {
        scope = $rootScope.$new();
        controller = _$controller_;
        ctrl = controller('MoviesCtrl',
            { $scope: scope });
    }));

    //test spec
    it('check movieDetail', function () {       
        expect(scope.movieDetail[1].movie).toBe('sarkar 3');
    })
});
