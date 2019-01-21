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
	//response.render("pages/listings", { "hello": "world" });
	response.render("pages/listings", textMessagesRef)
});


/* https://stackoverflow.com/questions/46969763/how-to-render-view-template-using-node-js-express */
/* Error message to below cant get headers after they are sent */
/*
app.get("/listings", function(request,response) {
	var textMessagesRef = firebase.database().ref("TextMessages/");
	console.log("testing from 47");	
    textMessagesRef.orderByKey().on("child_added", function(data) {
	console.log("testing from 50");	
	response.render("pages/listings", textMessagesRef)
		});
	});
	*/
/* end above cant get headers after they are sebt */

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
/*
var nameRef = firebase.database().ref("TextMessages/");
nameRef.orderByChild("name").on("child_added", function(data) {
   console.log("the name is " + data.val().name);
   console.log("the phone is " + data.val().phone);  
});

*/

/* below works but trying to use once function  instead*/

/*
var textMessagesRef = firebase.database().ref("TextMessages/");
textMessagesRef.orderByKey().on("child_added", function(data) {

   //console.log("the name is " + data.val().name);
   console.log("The longitude is" + (data.val().latcoords) + "The latitude is " + (data.val().longcoords) + "The name is " + (data.val().name) + "The phone is"+ (data.val().phone));
   var phonetest = " the phone"; 
   //var phonetest = (data.val().phone);
   console.log(phonetest);

});
*/

/* below https://howtofirebase.com/save-and-query-firebase-data-ed73fb8c6e3a */
var textMessagesRef = firebase.database().ref("TextMessages/");
textMessagesRef.once("value", function (snap) {
	snap.forEach(function (childSnap) {
	 console.log("snap for Each", childSnap.val());
	});
   });
 /* above https://howtofirebase.com/save-and-query-firebase-data-ed73fb8c6e3a */  

 /*
var nameRef = firebase.database().ref("TextMessages/");

nameRef.orderByChild("name").on("child_added", function(data) {
   console.log(data.val().name);
});
*/
/* https://www.tutorialspoint.com/firebase/firebase_queries.htm */

/*
var textMessages2Ref = firebase.database().ref("TextMessages/");

textMessages2Ref.orderByValue().on("value", function(data) {
   
   data.forEach(function(data) {
      console.log("The " + data.key + " information is " + data.val());
   });  
});
*/

/* https://www.tutorialspoint.com/firebase/firebase_queries.htm */

/*
app.get("/dataFromFirebase", function(request, response) {
	console.log("testing 123");
	requestJs.get("https://find-me-eba22.firebaseio.com/TextMessages.json?api_key=" + config.get("apiKey"), function(error, httpResponse, body) {
		response.send(body);
	});
});
*/
/* https://firebase.google.com/docs/reference/rest/database/ */


// </Routes>

app.listen(config.get("port"), function() {
	console.log("Listening on port " + this.address().port);
});
