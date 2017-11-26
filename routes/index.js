var express = require('express');
var router = express.Router();
var controllerDB = require('../controllers/ControllerDatabase');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post("/storeData", controllerDB.storeData);

module.exports = router;
