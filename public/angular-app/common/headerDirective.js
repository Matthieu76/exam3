angular.module("hoBook")
  .directive('header', header);

function header(){
  return {
    restrict: 'A',
    templateUrl: 'angular-app/common/partials/header.html'
  }
};