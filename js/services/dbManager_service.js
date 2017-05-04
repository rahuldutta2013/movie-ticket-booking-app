mainApp.service('dbManager_service', function () {
    this.storeDataInLocalStorage = function (obj, movieName) {
        var dataStr = JSON.stringify(obj);
        localStorage.setItem(movieName, dataStr);
        return dataStr;
    }
});

mainApp.service('changeSeatStatus_service', function () {
    this.makeDisable = function (obj) {
        for (var i = 0; i < obj.length; i++) {
            for (var j = 0; j < obj[i].length; j++) {
                if (obj[i][j].check === true) {
                    obj[i][j].seat = true;
                }
            }
        }
        return obj;
    }
});

mainApp.service('getMovieName_service', function () {
    this.movieName;
    this.setName = function (movieName) {
        this.movieName = movieName;
    }
    this.getName = function () {
        return this.movieName;
    }
});

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