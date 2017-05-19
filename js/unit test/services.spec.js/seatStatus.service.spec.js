describe('SeatStatusSvc Test', function () {
    var sampleSvcObj;
    beforeEach(function () {
        angular.mock.module('myApp');
    });

    beforeEach(inject(function (SeatStatusSvc) {
        sampleSvcObj = SeatStatusSvc;
    }));

    it('to check disable', function () {
        var obj = [
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

        sampleSvcObj.makeDisable(obj);
        expect(obj[0][0].seat).toBe(true);

    })

});
