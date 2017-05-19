var mainApp = angular.module("myApp", ["ui.router"]);
mainApp.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state("home", {
    url: '/home',
    templateUrl: 'templates/movies.html',
    controller: 'MoviesCtrl',
    resolve: {
      movieList: function (dataService) {
        return dataService.getData();
      }
    }
  });

  $stateProvider.state("selectSeat", {
    url: '/home/selectSeat/:movie',
    templateUrl: 'templates/selectSeat.html',
    controller: 'SelectSeatCtrl',
    resolve: {
      seatData: ['$q', '$http', '$stateParams', 'SeatSvc',
        function ($q, $http, $stateParams, SeatSvc) {
          return SeatSvc.findAvailSeat($stateParams.movie);
        }],
       movieDetail: ['$stateParams', 'dataService',
        function ($stateParams, dataService) {
          return dataService.getMovieDetails($stateParams.movie);       
        }]
    }
  });

  $stateProvider.state('selectSeat.prevSummary', {
    views: {
      "selectSeat.prevSummary": {
        name: 'prevSummary',
        templateUrl: 'templates/previewSummary.html',
        controller: 'PreviewSummaryCtrl',
        resolve: {
          movieDetail: function (MovieDetailSvc) {
            return MovieDetailSvc.getMovieObj();
          },
          ticketDetails: function (TicketManagerSvc) {
            return TicketManagerSvc.getTicketObj();
          }
        }
      }
    }
  })

  $stateProvider.state("payment", {
    url: '/home/selectSeat/:movie/payment',
    templateUrl: 'templates/payment.html',
    controller: 'PaymentCtrl',
    resolve: {
      ticketDetails: function (TicketManagerSvc) {
        return TicketManagerSvc.getTicketObj();
      },
       movieDetail: ['$stateParams', 'dataService',
        function ($stateParams, dataService) {
          return dataService.getMovieDetails($stateParams.movie);       
        }]
    }
  });

  $stateProvider.state("confirm", {
    url: '/home/confirm',
    templateUrl: 'templates/confirm.html',
    controller: 'ConfirmCtrl',
    resolve: {
      movieDetail: function (MovieDetailSvc) {
        return MovieDetailSvc.getMovieObj();
      },
      ticketDetails: function (TicketManagerSvc) {
        return TicketManagerSvc.getTicketObj();
      }
    }
  });



  $urlRouterProvider.otherwise("/home");
});