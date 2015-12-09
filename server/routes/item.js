var express = require('express');
var routerItem = express.Router();
var Person = require('../models/userSchema');

//routItem update
routerItem.put ('/update/:username', function(req,res){
	console.log("item route");
        var notPerList = {
            _id: false,
            __v: false,
            passwordHash :false,
            bdDay: false,
            bdMonth: false,
            bdYear: false,
            firstName: false,
            lastName: false,
            profilePic: false
        };

    console.log("username was %s" ,req.params.username);
	user = Person.verifyToken(req.headers.authorization, function(user) {
        console.log(req.body);
        if (user) {

            Person.findOne({username:req.params.username},notPerList, function(err, result) {
            if (err) {
            	console.log("Err get person");
                res.sendStatus(403);
                return;
            }

       	 	if (result.username != user.username) {
       	 		console.log("Err comparing username");
                res.sendStatus(403);
	    		return;
            }


             });

       }
        else {
        	console.log("Person verify user error");
            res.sendStatus(403);
        }

    });
});



//routItem reserver
routerItem.put('/reserve/:username', function(req,res){
	console.log("reserve route");
        var notPerList = {
            _id: false,
            __v: false,
            passwordHash :false,
            bdDay: false,
            bdMonth: false,
            bdYear: false,
            firstName: false,
            lastName: false,
            profilePic: false
        };

    console.log("username was %s" ,req.params.username);
	user = Person.verifyToken(req.headers.authorization, function(user) {
        if (user) {

            Person.findOne({username:req.params.username},notPerList, function(err, result) {
            if (err) {
            	console.log("Err get person");
                res.sendStatus(403);
                return;
            }

       	 	if (result.username != user.username) {
       	 		console.log("Err comparing username");
                res.sendStatus(403);
	    		return;
            }

         });

       }
        else {
        	console.log("Person verify user error");
            res.sendStatus(403);
        }

    });
});

module.exports = routerItem;
