// myService.spec.js
describe("dataService", function () {
    // INFO: we need rootScope for testing with angular promises!
    var $http, myService, $rootScope;

    // shortcut usage of module()
    beforeEach(module('myApp'));

    // shortcut usage of inject helper
    // WARNING: you can't use module() in inject
    // INFO: you can use _dependency_ format to avoid naming collisions
    beforeEach(inject(function ($httpBackend, dataService, _$rootScope_) {
        // we use $injector to get access $httpBackend
        http = $httpBackend;
        myService = dataService;
        $rootScope = _$rootScope_;
    }));


    describe("updatePost", function () {
        it("should reject if the post doesn't have an id", function () {
            http.when('GET', 'js/movies.json').respond(200, { data: true });
            myService.getData()
            http.flush();
        });

        it("should reject if the post doesn't have an id", function () {
            http.when('GET', 'js/movies.json').respond(200, { data: true });
            myService.getMovieDetails('bahubali')
            http.flush();
        });
    })
});