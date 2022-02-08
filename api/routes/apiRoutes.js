var express = require('express');
var router = express.Router();
var Hotel = require('../models/apiModel');

var hotelList = require("../controllers/apiController.js");

router.get('/api/gethotels', hotelList.paginatedResults(Hotel) , hotelList.getHotels);


module.exports = router;