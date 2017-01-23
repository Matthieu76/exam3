angular.module('hoBook').controller('detailsController', detailsController);

function detailsController($location, $route, $routeParams, hotelsFactory) {
  var dc = this;
  var id = $routeParams.id;
  dc.hotel = null;
  dc.reviews = null;
  dc.isSubmitted = false;

  hotelsFactory.hotelGetOne(id).then(function(response) {
    dc.hotel = response.data;
    dc.stars = _getStarRating(response.data.stars);
  });

  hotelsFactory.reviewGetAll().then(function(response) {
    dc.reviews = response.data;
  });

  function _getStarRating(stars) {
    return new Array(stars);
  }

  dc.addReview = function() {
    var postData = {
      name: dc.name,
      review: dc.review,
      rating: dc.rating
    };
    if (dc.reviewForm.$valid) {
      hotelsFactory.postReview(id, postData).then(function(response) {
        if (response.status === 200) {
          console.log("envoyer");
          $route.reload();
        }
      }).catch(function(error) {
        console.log(error);
      });
    } else {
      dc.isSubmitted = true;
    }
  };

}
