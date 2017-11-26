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

        var Customers = db.collection('CUSTOMERS');
        var customersData={
            _id: cutomerID,
            FIRSTNAME: customer.name.fName,
            LASTNAME: '1',
            STREET: '1',
            CITY: '1',
            STATE: '1',
            ZIP: '1',
            EMAIL: '1'
        };

        Customers.insertOne(customersData, function (err, docs) {
            if (err) throw err;

        });

        var Billing = db.collection('BILLING');
        var billingData={
            _id:billingID,
            CUSTOMER_ID:cutomerID,
            CREDITCARDTYPE: '',
            CREDITCARDNUM: '',
            CREDITCARDEXP: '',
            CREDITCARDSECURITYNUM: ''
        };

        Billing.insertOne(billingData, function (err, docs) {
            if (err) throw err;

        });

        var Shipping = db.collection('SHIPPING');
        var shippingData={
            _id: shippingID,
            CUSTOMER_ID: cutomerID,
            SHIPPING_STREET: '',
            SHIPPING_CITY: '',
            SHIPPING_STATE: '',
            SHIPPING_ZIP: ''
        };

        Shipping.insertOne(shippingData, function (err, docs) {
            if (err) throw err;

        });

        var Orders = db.collection('Orders');
        var ordersData={
            CUSTOMER_ID: cutomerID,
            BILLING_ID: billingID,
            SHIPPING_ID: shippingID,
            DATE: '',
            PRODUCT_VECTOR: '',
            ORDER_TOTAL: ''
        };

        Orders.insertOne(ordersData, function (err, docs) {
            if (err) throw err;

        });

        response.send('succseessssafas');

        db.close(function (err) {
            if(err) throw err;
        });
    });//end of connect
};//end function