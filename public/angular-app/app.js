angular.module('hoBook', ['ngRoute']).config(config);

function config($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl  : 'angular-app/home-page/home-page.html',
    controller : 'homeController',
    controllerAs : 'hc'
  })
  .when('/details/:id', {
    templateUrl  : 'angular-app/hotel-details/hotel-details.html',
    controller : 'detailsController',
    controllerAs : 'dc'
  })
  .otherwise({
    redirectTo   : '/'
  });
}




