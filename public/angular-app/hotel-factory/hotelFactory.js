angular.module("hoBook").factory("hotelsFactory", hotelsFactory);

function hotelsFactory($http) {

	return {
		hotelGetAll : hotelGetAll,
		hotelGetOne : hotelGetOne,
		postReview  : postReview,
		reviewGetAll : reviewGetAll
	};

function hotelGetAll() {
	return $http.get('/api/').then(complete).catch(error);
}

function hotelGetOne(id) {
	return $http.get('/api/details/' +id).then(complete).catch(error);
}

function postReview(id, review) {
    return $http.post('/api/details/' + id + '/reviews', review).then(complete).catch(error);
}

function reviewGetAll() {
    return $http.get('/api/details/').then(complete).catch(error);
}

function complete(response) {
	return response;
}

function error(err) {
	return err;
}

}