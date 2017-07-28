var express = require("express");
var path = require("path");
var friends = require("../data/friends.js");

var app = express();
var PORT = process.env.PORT || 8080;

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // Create New person - takes in JSON input
    app.post("/api/friends", function(req, res) {
        var newperson = req.body;

        newperson.routeName = newperson.name.replace(/\s+/g, "").toLowerCase();

        console.log(newperson);

        characters.push(newperson);

        res.json(newperson);
    });
};