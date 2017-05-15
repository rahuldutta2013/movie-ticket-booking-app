mainApp.service('MovieDetailSvc', function () {
    this.movieObj = {};
    this.setName = function (movieName,price,showtime) {
        this.movieObj.movieName = movieName;
        this.movieObj.price = price;
        this.movieObj.showTime = showtime;
    }
    this.getMovieObj = function () {
        return this.movieObj;
    }
});