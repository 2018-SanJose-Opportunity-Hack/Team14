const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const config = require('./config');
const url = config.MONGO_URL;

const reports = [
	{
		// photo: "https://louisvilleky.gov/sites/default/files/styles/park_header_image/public/parks/park_event_images/black_mudd_web_header.jpg",
		"user-id": "leetcoder123",
		"location": "2161 N 1st St, San Jose, CA",
		"description": "hackers throwing trash everywhere",
		"park": "paypal park",
		"contact-method": "email",
		"can-contact": false
	},
	{
		// photo: "https://louisvilleky.gov/sites/default/files/styles/park_header_image/public/parks/park_event_images/black_mudd_web_header.jpg",
		"user-id": "leetcoder123",
		"location": "2161 N 1st St, San Jose, CA",
		"description": "hackers throwing trash everywhere",
		"park": "paypal park",
		"contact-method": "email",
		"can-contact": false
	},
	{
		// photo: "https://louisvilleky.gov/sites/default/files/styles/park_header_image/public/parks/park_event_images/black_mudd_web_header.jpg",
		"user-id": "leetcoder123",
		"location": "2161 N 1st St, San Jose, CA",
		"description": "hackers throwing trash everywhere",
		"park": "paypal park",
		"contact-method": "email",
		"can-contact": false
	},
];

MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
	if (err) throw err;
	let dbo = db.db("csjpark-teamfirstplace");
	// dbo.createCollection("reports", function(err, res) {
	// 	if (err) throw err;
	// 	console.log("Collection created!");
	// });

	app.listen(8080);
	console.log("Server listening");
	// --- routes ---
	// lookup by userid
	app.get('/', (req, res) => {
		console.log("Get request received");
		let userid = req.params.userid;
		if (userid) {
			dbo.collection("reports").find( {query: userid} );
		} else {
			console.log("User id doesn't exist");
		}
	});
	// post report
	app.post('/', (req, res) => {
		let report = req.body;
		if (report) {
			dbo.collection("reports").insertOne(report, (err, res) => {
				if (err) throw err;
				console.log("New report inserted");
			});
		} else {
			console.log("Request has no body");
		}
	});
	db.close();
});