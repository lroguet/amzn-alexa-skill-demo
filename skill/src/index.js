'use strict';

// --- Libraries ---------------------------------------------------------------
var ALEXA = require('alexa-sdk');

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

exports.handler = function(event, context, callback) {

  var demo = ALEXA.handler(event, context);
  demo.registerHandlers(handlers);
  demo.execute();

};

// Intent handlers
var handlers = {
  'MyDemoIntent': function() {
      this.emit(':tell', 'The demo is great. Thank you very much.');
  }
};