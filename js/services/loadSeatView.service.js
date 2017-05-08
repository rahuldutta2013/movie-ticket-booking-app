mainApp.service('loadSeatView_service', function () {

    this.findAvailSeat = function (movieName) {
       var obj = [];
        var scope = [], arr = [];
        var availSeat = localStorage.getItem(movieName);
        if (availSeat) {
            this.rows = JSON.parse(availSeat);
        } else {
            for (var i = 0; i < 2; i++) {
                for (var j = 0; j < 2; j++) {
                    var seat = {};
                    seat.val = j + 1;
                    seat.letter = i + 1;
                    seat.check = false;
                    seat.seat = false;
                    arr.push(seat);
                }
                obj.push(arr);
                arr = [];
            }
            this.rows = obj;
        }
        return this.rows;
    }
});