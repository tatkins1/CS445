var express = require('express');
var router = express.Router();
var path = require('path');
var Ticket = require('../classes/ticket');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', {root: path.normalize(__dirname+'/../views')});
  const tic = new Ticket(1,2,3,4);
  tic.foo();
  console.log(tic.price);
});

module.exports = router;
