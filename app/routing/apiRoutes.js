var express = require("express");
var path = require("path");
var friends = require("../data/friends.js");

var app = express();
var PORT = process.env.PORT || 8080;

module.exports = function(app) {
        app.get("/api/friends", function(req, res) {
            res.json(friends);
        });

        // app.get("/api/", function(req, res) {
        //     res.json(newFriend);
        // })
        // Create New person - takes in JSON input
        app.post("/api/friends", function(req, res) {

                var newFriend = req.body;

                var newFriendScore = [];
                var compareFriends = [];

                console.log(newFriend);

                for (i = 0; i < friends.length; i++){
                	compareFriends = friends[i].scores;
                	console.log("Friends Scores: " + compareFriends);
                }

                for (i = 0; i < newFriend.length; i++) {
                    newFriendScore = newFriend[i].scores;
                    console.log("New Friend Scores" + newFriendScore);
                }


                    // friends.push(newFriend);
                    // console.log(friends);


                    //res.json(newFriend);
        });
    };