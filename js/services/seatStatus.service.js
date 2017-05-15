mainApp.service('SeatStatusSvc', function () {
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