var express = require('express');
var router = express.Router();
var path = require('path');
var Ticket = require('../classes/ticket');
/*Initialize Theatre*/
/*
Create theatre object
Create instances of customers, employees and shows
add shows to theatre
*/
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', {root: path.normalize(__dirname+'/../views')});
});

module.exports = router;
