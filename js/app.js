var mainApp = angular.module("myApp", ["ui.router"]);
mainApp.config(function ($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state("homePage", {
        name: 'home',
        url: '/home',
        templateUrl: 'templates/movies.html',
         controller: 'fetchMoviesCtrl'
    });
    $stateProvider.state("selectSeat", {
        name: 'selectSeat',
        url: '/home/selectSeat',
        templateUrl: 'templates/bookTicket.html',
        controller: 'selectSeat_ctrl'
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