var express = require('express');
var router = express.Router();
var controllerDB = require('../controllers/database');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/getAllOrders', controllerDB.getAllRoutes());
/*
router.post("/storeData", controllerDB.storeData);
*/
module.exports = router;
