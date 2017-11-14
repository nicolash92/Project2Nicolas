var express = require('express');
var router = express.Router();
var controllerDB = require('../controllers/database');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/getAllOrders', controllerDB.getAllOrders);
/*
router.post("/storeData", controllerDB.storeData);
*/
module.exports = router;
