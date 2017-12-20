#!/usr/bin/env node
const Promise = require('promise');
const cmd = require('node-cmd');
const axios = require('axios');

var googleapi = 'https://maps.googleapis.com/maps/api/geocode/json?';

console.log(process.argv);
// if(process.argv) {
//     googleapi += process.argv[0];
//     axios.get(googleapi)
//     .then(function(res) {
//         console.log(res);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });
// }
// else {
//     console.log("enter a value after the command.");
// }