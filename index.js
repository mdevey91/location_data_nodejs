#!/usr/bin/env node
'use strict';
const Promise = require('promise');
const cmd = require('node-cmd');
const axios = require('axios');

// var googleapi = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

if(process.argv.length > 2) {
    var googleapi = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + process.argv[2];
    axios.get(googleapi)
    .then(function(res) {
        console.log(process.argv[2] + "\'s Data: ");
        console.log("Latitude: ",res.data.results[0].geometry.location.lat);
        console.log("Longitude: ", res.data.results[0].geometry.location.lng);
    })
    .catch(function(error) {
        console.log(error);
    });
}
else {
    console.log("enter a value after the command.");
}