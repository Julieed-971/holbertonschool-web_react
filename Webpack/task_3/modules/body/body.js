require('./body.css');
var $ = require('jquery');
var _ = require('lodash');

$(document).ready(function() {
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started</button>');
    $('body').append('<p id="count"></p>');

    let count = 0;

    function updateCounter() {
        count += 1;
        $('#count').text(`${count} clicks on the button`);
    }
    $('button').on('click', _.debounce(updateCounter, 500));
});