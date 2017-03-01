var page = require('page');

var main = document.getElementById('main-container');

page('/' , function (ctx ,next) {
   main.innerHTML = 'home <a href="/signup">Registrarse </a>';
});

page('/signup' , function (ctx ,next) {
    main.innerHTML = 'Singup <a href="/">Home</a>';
});

page();