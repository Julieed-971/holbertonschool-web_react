require('./header.css');
var $ = require('jquery');

$(document).ready(function() {
    var header = document.createElement('header')
    $('body').before(header)
    $('header').append('<div id="logo"></div>')
    $('header').append('<p>Holberton Dashboard</p>');
    console.log("Init header");
});