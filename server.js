"use strict";

let express = require("express");
let logger = require("morgan");
let path = require("path");

let config = require("./config");

let requestDebug = require("request-debug");
let requestJs = require("request");

if (config.get("env") !== "production") {
	requestDebug(requestJs);
}

let app = express();

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

if (config.get("env") !== "production") {
	app.use(logger("dev"));
}

app.use(express.static(path.join(__dirname, "public")));

let firebase = require("firebase");

firebase.initializeApp(require("./client_secret"));

// <Routes>

app.get("/", function(request, response) {
	/* config.get("apiKey"); */

	response.render("pages/index", { "hello": "world" });
});

app.get("/listings", function(request, response) {
	response.render("pages/listings", { "hello": "world" });
});

app.get("/postToFirebase", function(request, response){
	console.log("sending the thing");
	firebase.database().ref("/TextMessages").push(request.query), function(error) {
		console.log(error);
	};
	console.log("done sending the thing");

	response.render("pages/index");
});

var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
   console.log("Testing ref on value");
});



app.get("/dataFromFirebase", function(request, response) {
	console.log("testing 123");
	requestJs.get("https://find-me-eba22.firebaseio.com/TextMessages.json?api_key=" + config.get("apiKey"), function(error, httpResponse, body) {
		response.send(body);
	});
});
/* https://firebase.google.com/docs/reference/rest/database/ */
// </Routes>

app.listen(config.get("port"), function() {
	console.log("Listening on port " + this.address().port);
});
