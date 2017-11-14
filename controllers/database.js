var mongodb = require('mongodb');
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://nicolas:nicpass@ds255265.mlab.com:55265/heroku_3lrv21zs';


module.exports.getAllOrders =  function (request, response) {

    mongodb.MongoClient.connect(mongoDBURI, function(err, db) {
        if(err) throw err;

        var Orders = db.collection('Orders');


        Orders.find().toArray(function (err, docs) {
            if(err) throw err;

            response.render('getAllOrders', {results: docs});

        });



        db.close(function (err) {
            if(err) throw err;
        });
    });//end of connect
};//end function