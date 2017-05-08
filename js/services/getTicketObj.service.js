mainApp.service('getTicketObj_service', function () {
    this.ticketObj = {};
    this.setTicketObj = function(noOfTicket,totPrice,SeatObj){
        this.ticketObj.noOfTicket = noOfTicket;
        this.ticketObj.totPrice = totPrice;
        this.ticketObj.currentSeat = SeatObj;
    }
    this.getTicketObj = function(){
        return this.ticketObj;
    }
});