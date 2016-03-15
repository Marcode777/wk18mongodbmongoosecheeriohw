var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var expressHandleBars = require("express-handlebars");
var mongoose = require("mongoose");
var cheerio = require("cheerio");
var request = require("request"); //npm request is designed to be the simplest way to make http calls (go to the internet and get data back)
var mongojs = require("mongojs");


console.log("this works");
request("http://bloomberg.com", function(error, response, body){
  if(!error && response.statusCode == 200){
    console.log(body)
  }
});
