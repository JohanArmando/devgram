var page = require('page');
const empty = require('empty-element');
var main = document.getElementById('main-container');
var template = require('./template');

page('/signin' , function (ctx ,next) {
    document.title = 'Devgram - Signin';
    empty(main).appendChild(template)
});