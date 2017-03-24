var page = require('page');
var main = document.getElementById('main-container');
var template = require('./template');

page('/' , function (ctx ,next) {
    main.appendChild(template)
});