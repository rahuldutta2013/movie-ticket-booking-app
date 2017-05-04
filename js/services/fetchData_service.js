mainApp.service("dataService", ['$http', '$q', function ($http, $q) {
    return {
        getData: function () {
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
    };
}]);