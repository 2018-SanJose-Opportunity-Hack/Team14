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
		"can-contact": false,
		"status": "open"
	},
	{
		// photo: "https://louisvilleky.gov/sites/default/files/styles/park_header_image/public/parks/park_event_images/black_mudd_web_header.jpg",
		"user-id": "leetcoder123",
		"location": "2161 N 1st St, San Jose, CA",
		"description": "hackers throwing trash everywhere",
		"park": "paypal park",
		"contact-method": "email",
		"can-contact": false,
		"status": "open"
	},
	{
		// photo: "https://louisvilleky.gov/sites/default/files/styles/park_header_image/public/parks/park_event_images/black_mudd_web_header.jpg",
		"user-id": "leetcoder123",
		"location": "2161 N 1st St, San Jose, CA",
		"description": "hackers throwing trash everywhere",
		"park": "paypal park",
		"contact-method": "email",
		"can-contact": false,
		"status": "open"
	},
];

MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
	if (err) throw err;
	let dbo = db.db("csjpark-teamfirstplace");
	dbo.createCollection("reports", (err, res) => {
		if (err) throw err;
		console.log("Complaints created!");
	});
	dbo.createCollection("parks", (err, res) => {
		if (err) throw err;
		console.log("Parks created");
	});
	dbo.createCollection("users", (err, res) => {
		if (err) throw err;
		console.log("Users created");
	});

	app.listen(process.env.PORT || 5000);
	console.log("Server listening");

	// --- routes ---
	// parks, this call should be done on app startup 
	app.get('/', (req, res) => {
		let pname = req.params.name;
		if (pname) {
			dbo.collection("parks").find( {query: pname} );
		} else {
			console.log("Park doesn't exist");
		}
	});
	// my submissions
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