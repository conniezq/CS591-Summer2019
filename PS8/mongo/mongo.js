const mongoClient = require('mongodb').MongoClient;
const configs = require("../config.json");
const mongoURL = config.db.host;

let _db;

module.exports = {

    connect: function( callback ) {
        mongoClient.connect( mongoURL,  { useNewUrlParser: true }, function( err, client ) {
            _db  = client.db('priceInfo');
            return callback( err );
        } );
    },
    getDB: () => { return _db; }


}
