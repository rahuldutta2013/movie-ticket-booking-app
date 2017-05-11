var mainApp = angular.module("myApp", ["ui.router"]);
mainApp.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state("homePage", {
    name: 'home',
    url: '/home',
    templateUrl: 'templates/movies.html',
    controller: 'fetchMoviesCtrl',
    resolve: {
      message: function (dataService) {
        return dataService.getData();
      }
    }
  });

  $stateProvider.state("selectSeat", {
    name: 'selectSeat',
    url: '/home/selectSeat/:movie',
    templateUrl: 'templates/bookTicket.html',
    controller: 'selectSeat_ctrl',
    resolve: {
      seatData: ['$q', '$http', '$stateParams', 'loadSeatView_service',
        function ($q, $http, $stateParams, loadSeatView_service) {
          return loadSeatView_service.findAvailSeat($stateParams.movie);
        }],
      movieDetail: ['$q', '$http', '$stateParams', function ($q, $http, $stateParams) {
        var deferred = $q.defer();
        $http.get('js/movies.json')
          .then(function (response) {
            response.data.movies.forEach(function (movieData) {
              if (movieData.movie === $stateParams.movie) {
                deferred.resolve(movieData)
              }
            })
          })
          .catch(function (error) {
            deferred.reject(error);
          });
        return deferred.promise;
      }]
    }
  });

  $stateProvider.state("payment", {
    name: 'payment',
    url: '/home/payment',
    templateUrl: 'templates/payment.html',
    controller: 'paymentValidateCtrl'
  });

  $stateProvider.state("confirmBooking", {
    name: 'confirmBooking',
    url: '/home/confirmBooking',
    templateUrl: 'templates/confirmBooking.html',
    controller: 'confirmBookingCtrl'
  });


  $stateProvider.state('selectSeat.prevSummary', {

    views: {
      "selectSeat.prevSummary": {
        name: 'prevSummary',
        //   url: '/selectSeat/payment',  
        templateUrl: 'templates/previewSummary.html',
        controller: 'previewOrderSummaryCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise("/home");
});