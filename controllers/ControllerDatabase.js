var mongodb = require('mongodb');
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://nicolas:nicpass@ds255265.mlab.com:55265/heroku_3lrv21zs';


module.exports.storeData =  function (request, response) {

    mongodb.MongoClient.connect(mongoDBURI, function(err, db) {

        if(err) throw err;
        var cart= JSON.parse(request.body.cart);
        var card= JSON.parse(request.body.card);
        var customer= JSON.parse(request.body.customer);

        var cutomerID = Math.floor((Math.random()*10000000000)+1 );
        var billingID = Math.floor((Math.random()*10000000000)+1 );
        var shippingID = Math.floor((Math.random()*10000000000)+1 );

        var Orders = db.collection('CUSTOMERS');
        var ordersData={
            _id: cutomerID,
            FIRSTNAME: '',
            LASTNAME: '',
            STREET: '',
            CITY: '',
            STATE: '',
            ZIP: '',
            EMAIL: ''
        };

        Orders.insertOne(ordersData, function (err, docs) {
            if (err) throw err;

        });
        /*
        var Orders = db.collection('Orders');

        var Orders = db.collection('Orders');

        var Orders = db.collection('Orders');
        */
        /*Orders.find().toArray(function (err, docs) {
            if(err) throw err;

            response.render('getAllOrders', {results: docs});

        });*/

        response.send('succseessssafas');

        db.close(function (err) {
            if(err) throw err;
        });
    });//end of connect
};//end function