angular.module('hoBook').controller('homeController', homeController);


function homeController(hotelsFactory, $scope) {
  var hc = this;
  hc.hotels = null;

  hotelsFactory.hotelGetAll().then(function(response) {
    hc.hotels = response.data;
    console.log(response.data);
  });
}

/* si l'import du json ne fonctionne pas...
function mainController($http) {
	var hc = this;
    hc.hotels = [];
    $http.get('./angular-app/main/hotel-data.json').success(function(data){
      hc.hotels = data;
      console.log("ok");
    });
}
*/
