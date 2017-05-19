describe('SeatStatusSvc Test', function () {
    var sampleSvcObj,
        store = {};
    beforeEach(function () {
        angular.mock.module('myApp');
    });

    beforeEach(inject(function (DbManagerSvc) {
        sampleSvcObj = DbManagerSvc;
    }));

    it('to check disable', function () {
        var obj = {
                    seatNo: 1,
                    check: true,
                    seat: false
                },
            movieName = 'bahubali'    
             

        sampleSvcObj.storeDataInLocalStorage(obj, movieName);
        expect(obj.seatNo).toBe(1);

    })

});
