var express = require('express');
var router = express.Router();
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://nicolas:nicpass@ds255265.mlab.com:55265/heroku_3lrv21zs';
var controllerDB = require('../controllers/database');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post("/storeData", controllerDB.storeData());


module.exports = router;
