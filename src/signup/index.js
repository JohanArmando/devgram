var page = require('page');
const empty = require('empty-element');
var main = document.getElementById('main-container');
var template = require('./template');

page('/signup' , function (ctx ,next) {
    document.title = 'Devgram - Signup';
    empty(main).appendChild(template)
});