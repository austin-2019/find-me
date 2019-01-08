let convict = require("convict");

let config = convict({
	"env": {
		"doc": "The application environment.",
		"format": ["production", "development", "test"],
		"default": "development",
		"env": "NODE_ENV"
	},
	"port": {
		"doc": "The port to bind.",
		"format": "port",
		"default": 3000,
		"env": "PORT",
		"arg": "port"
	},
	"apiKey": {
		"doc": "The NASA API key.",
		"format": "*",
		"default": "LKVQ0ZOycxqbnXO2Mc0oqepDQAhkBQsfYX4cWzWv",
		"env": "API_KEY",
		"arg": "apiKey"
	},
	"firebaseconfig" : {
		"apiKey": "AIzaSyD123PvPBnD0L4Nw6DKvlyjPzYIE9Sx_Jo",
		"authDomain": "find-me-eba22.firebaseapp.com",
		"databaseURL": "https://find-me-eba22.firebaseio.com",
		"projectId": "find-me-eba22",
		"storageBucket": "find-me-eba22.appspot.com",
		"messagingSenderId": "511040371879"
	  }
});

// Perform validation
config.validate({ "allowed": "strict" } );

module.exports = config;
