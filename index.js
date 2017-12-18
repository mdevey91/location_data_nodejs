#!/usr/bin/env node
const Promise = require('promise');
const cmd = require('node-cmd');

var msg = new SpeechSynthesisUtterance();
if (process.argv){
    msg.text = process.argv 
}
else {
    msg.text = "Please enter text.";
}

speechSynthesis.speak(msg);