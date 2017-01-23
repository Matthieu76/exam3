var mongoose = require('mongoose');

var Review = new mongoose.Schema({
  name : {
    type     : String, 
    required : false
  },
  review : {
  	type     : String,
  	required : false 
  },
  rating : {
  	type     : Number,
  	required : false
  }
});

mongoose.model('Review', Review);
