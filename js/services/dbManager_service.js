mainApp.service('dbManager_service', function () {
    this.storeDataInLocalStorage = function (obj, movieName) {
        var dataStr = JSON.stringify(obj);
        localStorage.setItem(movieName, dataStr);
        return dataStr;
    }
});
