const MongoClient = require('mongodb').MongoClient;
const config = require('./config');
const url = config.MONGO_URL;

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbo = db.db("csjpark-teamfirstplace");
  dbo.createCollection("reports", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});