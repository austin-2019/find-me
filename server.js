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
/*
var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
   console.log("Testing ref on value");
}, function (error) {
   console.log("Error: " + error.code);
});
*/
/* https://www.tutorialspoint.com/firebase/firebase_read_data.htm */

var nameRef = firebase.database().ref("TextMessages/");
nameRef.orderByChild("name").on("child_added", function(data) {
   console.log("the name is " + data.val().name);
   console.log("the phone is " + data.val().phone);
   
});


/* node calls the below code an unhandled promise rejection */
/* Do not use code below this line */
//var TextMessagesRef = firebase.database().ref("TextMessages").orderByKey();
// TextMessagesRef.once("value").then(function(snapshot){
// snapshot.forEach(function(childSnapshot){
// var key = childSnapshot.key;
// var childData = childSnapshot.val();

// var latcoords_val = childSnapshot.val().latcoords;
// var longcoords_val = childSnapshot.val().longcoords;
// var myhiddenfield_val = childSnapshot.val().myHiddenField;
// var name_val = childSnapshot.val().name;
// var phone_val = childSnapshot.val().phone;

// console.log("the Latitude is " + data.val().latcoords);
	// });
// });
/* do not use code above unhandled promise according to node */
/*
var nameRef = firebase.database().ref("TextMessages/");

nameRef.orderByChild("name").on("child_added", function(data) {
   console.log(data.val().name);
});
*/
/* https://www.tutorialspoint.com/firebase/firebase_queries.htm */
/*
var ratingRef = firebase.database().ref("TextMessages/");

ratingRef.orderByValue().on("value", function(data) {
   
   data.forEach(function(data) {
      console.log("The " + data.key + " rating is " + data.val());
   });
   
});
*/
/* https://www.tutorialspoint.com/firebase/firebase_queries.htm */



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
