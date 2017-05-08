mainApp.service('getMovieName_service', function () {
    this.movieObj = {};
    this.setName = function (movieName,price,showtime) {
        this.movieObj.movieName = movieName;
        this.movieObj.price = price;
        this.movieObj.showTime = showtime;
    }
    this.getName = function () {
        return this.movieObj;
    }
});