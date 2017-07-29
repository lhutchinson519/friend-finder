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
        var newFriend = req.body;

        newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();

        console.log(newFriend);

        characters.push(newFriend);

        res.json(newFriend);
    });

//     app.get("/api/", function(req, res){
// 	res.json(newFriend);
// })
};