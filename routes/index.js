var express = require('express');
var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controller.js');
var ctrlReviews = require('../controllers/reviews.controller.js');


router
  .route('/')
  .get(ctrlHotels.hotelGetAll);

router
  .route('/details/:hotelId')
  .get(ctrlHotels.hotelGetOne);

router
  .route('/details/:hotelId/reviews')
  .post(ctrlReviews.reviewAddOne);

router
  .route('/details')
  .get(ctrlReviews.reviewGetAll);

module.exports = router;
