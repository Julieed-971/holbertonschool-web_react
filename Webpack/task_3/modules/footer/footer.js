require('./footer.css');
var $ = require('jquery');

$(document).ready(function() {
    var footer = document.createElement('footer')
    $('body').after(footer)
    $('footer').append('<p>Copyright - Holberton School</p>');
})