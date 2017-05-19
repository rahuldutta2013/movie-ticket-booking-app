mainApp.service("dataService", ['$http', '$q', function ($http, $q) {
    this.getData = function () {
        var deferred = $q.defer();
        $http.get('js/movies.json')
            .then(function (response) {
                deferred.resolve(response.data);        
            })
            .catch(function (response) {
                deferred.reject(response);
            });
        return deferred.promise;
    }

    this.getMovieDetails = function (movieName) {
        return this.getData()
            .then(function (myData) {
                for (var i = 0; i < myData.movies.length; i++) {
                    if (myData.movies[i].movie == movieName) {
                        console.log(myData.movies[i]);
                        return myData.movies[i];
                    }
                }
            })
            .catch(function (err) {
                return err;
            })
    }
}]);  