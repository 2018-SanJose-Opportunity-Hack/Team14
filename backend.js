const MongoClient = require('mongodb').MongoClient;
const config = require('config.js');
const url = config.url;

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});