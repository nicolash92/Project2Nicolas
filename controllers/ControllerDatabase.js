var mongodb = require('mongodb');
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://nicolas:nicpass@ds255265.mlab.com:55265/heroku_3lrv21zs';


module.exports.storeData =  function (request, response) {

    mongodb.MongoClient.connect(mongoDBURI, function(err, db) {

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        }

        if(mm<10) {
            mm = '0'+mm
        }

        today = mm + '/' + dd + '/' + yyyy;

        if(err) throw err;
        var cart= JSON.parse(request.body.cart);
        var card= JSON.parse(request.body.card);
        var customer= JSON.parse(request.body.customer);

        var customerID = Math.floor((Math.random()*10000000000)+1 );
        var billingID = Math.floor((Math.random()*10000000000)+1 );
        var shippingID = Math.floor((Math.random()*10000000000)+1 );

        var Customers = db.collection('CUSTOMERS');
        var customersData={
            _id: customerID,
            FIRSTNAME: customer.name.fName,
            LASTNAME: customer.name.lName,
            STREET: card.billingAddress.add1,
            CITY: card.billingAddress.city,
            STATE: card.billingAddress.state,
            ZIP: card.billingAddress.zip,
            EMAIL: '1'
        };

        Customers.insertOne(customersData, function (err, docs) {
            if (err) throw err;

        });

        var Billing = db.collection('BILLING');
        var billingData={
            _id:billingID,
            CUSTOMER_ID:customerID,
            CREDITCARDTYPE: card.cardType,
            CREDITCARDNUM: card.cardNumber,
            CREDITCARDEXP: card.expMonth,
            CREDITCARDSECURITYNUM: ''//card.securityCode
        };

        Billing.insertOne(billingData, function (err, docs) {
            if (err) throw err;

        });
/*
        var Shipping = db.collection('SHIPPING');
        var shippingData={
            _id: shippingID,
            CUSTOMER_ID: customerID,
            SHIPPING_STREET: customer.shippingAddress.add1,
            SHIPPING_CITY: customer.shippingAddress.city,
            SHIPPING_STATE: customer.shippingAddress.state,
            SHIPPING_ZIP: customer.shippingAddress.zip
        };

        Shipping.insertOne(shippingData, function (err, docs) {
            if (err) throw err;

        });

        var Orders = db.collection('ORDERS');
        var ordersData={
            CUSTOMER_ID: customerID,
            BILLING_ID: billingID,
            SHIPPING_ID: shippingID,
            DATE: new Date(),
            PRODUCT_VECTOR: cart.items,
            ORDER_TOTAL: cart.totalPrice
        };

        Orders.insertOne(ordersData, function (err, docs) {
            if (err) throw err;

        });
*/
        response.send('succseessssafas');

        db.close(function (err) {
            if(err) throw err;
        });
    });//end of connect
};//end function