var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');

module.exports.hotelGetAll = function(req, res) {

	Hotel
	  .find() // prend tout
	  .exec(function(err, hotel) {
	  	if(err) {
	  		console.log("Impossible de récupérer les hotels");
	  		res
	  		  .status(500)
	  		  .json(err);
	  	} else {
	  		res
	  		  .json(hotel);
	  	}
	  });
};

module.exports.hotelGetOne = function(req, res) {
	var id = req.params.hotelId;

	Hotel
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
	  			"message" : "Hotel ID not found " + id
	  		};
	  	}
	  	res
	  	  .status(response.status)
	  	  .json(response.message);
	  });
};

module.exports.roomGetAll = function(req, res) {
  var hotelId = req.params.hotelId;

  Hotel
    .findById(domainId)
    .select('rooms')
    .exec(function(err, doc) {
      var response = {
        status : 200,
        message : []
      };
      if (err) {
        console.log("Error finding hotel");
        response.status = 500;
        response.message = err;
      } else if(!doc) {
        console.log("Hotel id not found in database", hotelId);
        response.status = 404;
        response.message = {
          "message" : "Hotel ID not found " + hotelId
        };
      } else {
        response.message = doc.rooms ? doc.rooms : [];
      }
      res
        .status(response.status)
        .json(response.message);
    });
};