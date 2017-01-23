angular.module("hoBook")
  .directive('footer', footer);

function footer(){
  return {
    restrict: 'A',
    templateUrl: 'angular-app/common/partials/footer.html'
  }
};
