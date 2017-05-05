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


 $stateProvider.state('selectSeat.payment', {
      
      views: {
        "selectSeat.payment": {
          name: 'payment',
        //   url: '/selectSeat/payment',  
          templateUrl: 'templates/makePayment.html',
          controller: 'previewOrderSummaryCtrl'
        }
      }
    })


    $urlRouterProvider.otherwise("/home");
});