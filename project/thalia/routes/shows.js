var express = require('express');
var router = express.Router();
var path = require('path');

router.post('/', function(req, res, next) {
	//createShow
});
router.get('/', function(req, res, next) {
	//viewShows
});
router.get('/*/sections', function(req, res, next) {
	//viewShowSections
});
router.get('/*/sections/*', function(req, res, next) {
	//viewSpecificSection
});
router.post('/*/donations', function(req, res, next) {
	//SubscribeToDonatedTickets
});
router.get('/*/donations/*', function(req, res, next) {
	//viewStatusofDonations
});
router.get('/*', function(req, res, next) {
	//viewShow
});
module.exports = router;
