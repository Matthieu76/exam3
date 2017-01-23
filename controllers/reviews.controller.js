var mongoose = require('mongoose');
var Review = mongoose.model('Review');

module.exports.reviewGetAll = function(req, res) {

	Review
	  .find() // prend tout
	  .exec(function(err, review) {
	  	if(err) {
	  		console.log("Impossible de récupérer les reviews");
	  		res
	  		  .status(500)
	  		  .json(err);
	  	} else {
	  		res
	  		  .json(review);
	  	}
	  });
};

module.exports.reviewGetOne = function(req, res) {
	var id = req.params.reviewId;

	Review
	  .findById(id)
	  .exec(function(err, doc) {
	  	var response = {
	  		status : 200,
	  		message : doc
	  	};
	  	if (err) {
	  		response.status = 500;
	  		response.message = err;
	  	} else if(!doc) {
	  		response.status = 404;
	  		response.message = {
	  			"message" : "Review ID not found " + id
	  		};
	  	}
	  	res
	  	  .status(response.status)
	  	  .json(response.message);
	  });
};

module.exports.reviewAddOne = function(req, res) {

	Review
	  .create({
	  	name   : req.body.name,
	  	review : req.body.review,
	  	rating : req.body.rating
      }, function (err, response){
	  if (err){
	    res
		  .status(400)
		  .json(err);
	  } else {
	  	res
	  	  .status(201)
		  .json(response);
	  }
      });
};

module.exports.reviewDelete = function(req, res) {
	var id = req.params.reviewId;

	Review
	  .findById(id)
	  .remove()
	  .exec(function(err) {
	  	if(err) {
	  		res.send(err);
	  	} else {
	  		res.json({ message : 'Deleted' });
	  	}
	  });
};
