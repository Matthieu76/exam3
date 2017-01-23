var mongoose = require('mongoose');
var Review = require('./reviews.model');

var Photo = new mongoose.Schema({
  url : {
    type      : String, 
    required  : false
  }
});

var Room = new mongoose.Schema({
  type : {
    type     : String,
    required : false
  },
  number : {
    type     : Number,
    required : false
  },
  description : {
    type     : String,
    required : false
  },
  photos : [Photo],
  price : {
    type     : Number,
    required : false
  }
});

var Hotel = new mongoose.Schema({
  name : {
    type      : String,
    required  : false
  },
  stars : {
    type      : Number,
    required  : false
  },
  description : {
    type      : String,
    required  : false
  },
  photos : [Photo],
  currency : {
    type      : String,
    required  : false
  },
  rooms       : [Room],
  reviews     : [Review]
});

mongoose.model('Photo', Photo);
mongoose.model('Hotel', Hotel);
