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
		"doc": "The Firebase Web API key.",
		"format": "*",
		"default": "LKVQ0ZOycxqbnXO2Mc0oqepDQAhkBQsfYX4cWzWvAIzaSyD123PvPBnD0L4Nw6DKvlyjPzYIE9Sx_Jo",
		"env": "API_KEY",
		"arg": "apiKey"
	}
});

// Perform validation
config.validate({ "allowed": "strict" } );

module.exports = config;
