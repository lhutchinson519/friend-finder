var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var http = require("http");
var url = require("url");
var fs = require("fs");

var app = express();
var PORT = process.env.PORT || 8080;

app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "app/data/friends.js"));
});

// Create New person - takes in JSON input
app.post("/api/friends", function(req, res) {
    var newperson = req.body;
    newperson.routeName = newperson.name.replace(/\s+/g, "").toLowerCase();
    console.log(newperson);
    characters.push(newperson);
    res.json(newperson);
});

app.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
});