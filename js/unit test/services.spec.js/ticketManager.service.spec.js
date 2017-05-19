describe('TicketManagerSvc Test', function () {
    var sampleSvcObj;
    beforeEach(function () {
        angular.mock.module('myApp');
    });

    beforeEach(inject(function (TicketManagerSvc) {
        sampleSvcObj = TicketManagerSvc;
    }));

    it('set and get ticket object', function () {
        var SeatObj = [
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
        ],
        noOfTicket = '2',
        totPrice = '100';
        sampleSvcObj.ticketObj = {};
        sampleSvcObj.setTicketObj(noOfTicket, totPrice, SeatObj);
        expect(sampleSvcObj.ticketObj.totPrice).toBe('100');

        sampleSvcObj.getTicketObj();
        expect(sampleSvcObj.ticketObj.totPrice).toBe('100');

    })

});
