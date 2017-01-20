const MongoClient = require("mongodb").MongoClient;

var client;

module.exports = {
    connect: function(url, success, fail) {
        MongoClient.connect(url, function (err, cli) {
            if(err==null) {
                client = cli;
                success();
            } else {
                fail();
            }
        })
    },
    get: function() {
        return client;
    },
    col: function(name) {
        return client.collection(name);
    }
};