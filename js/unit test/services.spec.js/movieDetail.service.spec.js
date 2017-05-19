describe('movieDetailService Test', function () {
    var sampleSvcObj;
    beforeEach(function () {
        angular.mock.module('myApp');
    });

    beforeEach(inject(function (MovieDetailSvc) {
        sampleSvcObj = MovieDetailSvc;
    }));

    it('set and get movie object', function () {
        var movieName = 'bahubali',
            price = '100',
            showTime = '6:30';
            sampleSvcObj.movieObj = {};
        sampleSvcObj.setName(movieName, price, showTime);
        expect(sampleSvcObj.movieObj.price).toBe('100');

         sampleSvcObj.getMovieObj();
         expect(sampleSvcObj.movieObj.price).toBe('100');
    })

});
