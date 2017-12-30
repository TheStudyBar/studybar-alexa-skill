const Alexa = require('alexa-sdk');

const handlers = {
    'LaunchRequest': function () {
    	this.emit('HelloWorldIntent');
	},

	'HelloWorldIntent': function () {
    	this.emit(':tell', 'Hello World!');
	}
};

exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.appId = "amzn1.ask.skill.abc178";
    alexa.registerHandlers(handlers);
    alexa.execute();
};  