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

// <Routes>

app.get("/", function(request, response) {
	config.get("apiKey");

	response.render("pages/index", { "hello": "world" });
});

app.get("/dataFromNasa", function(request, response) {
	requestJs.get("https://api.nasa.gov/planetary/apod?api_key=" + config.get("apiKey"), function(error, httpResponse, body) {
		response.send(body);
	});
});

app.get("firebaseconfig", function(request, response) {
	requestJs.get("https://find-me-eba22.firebaseio.com/" + config.get(""), function(error, httpResponse, body) {
		response.send(body);
	});
});

// </Routes>

app.listen(config.get("port"), function() {
	console.log("Listening on port " + this.address().port);
});
