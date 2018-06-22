#!/usr/bin/env node

// Load Profound.js
var profoundjs = require("profoundjs");

// Process command line arguments
profoundjs.rlog = process.argv.includes("-rlog");
profoundjs.tlog = process.argv.includes("-tlog");

// Apply configuration
var config = require("./config.js");
profoundjs.applyConfig(config);

// Start Profound.js server
var isWorker = profoundjs.server.listen();
if (isWorker) {

  // This is the top-level Express Application.
  // Custom Express coding can be added here.
  var express = profoundjs.server.express;
  var app = profoundjs.server.app;
  app.use(express.json());  // default to use JSON-encoded post data
  app.use('/', (req, res, next) => {
    console.log(`${req.method} for ${req.url}`);
    next();
  });

  // routes setup
  // ex: localhost:8037/helloworld
  app.get('/helloworld', profoundjs.express('ws/helloWorld')); // web service
  app.get('/ws2/order/:id', profoundjs.express('puialme/ws2'));
  app.post('/ws1/user', profoundjs.express('puialme/ws1')); // web service
}


