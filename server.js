var express = require('express');

var app = express();


app.set('view engine', 'jade');

app.use(express.static('public'));

app.get('/' , function (req , res) {
   res.render('index');
});

app.listen(3001,function(err){
    if(err) return console.log('Hubo un error'), process.exit(1);
    console.log('Devgran escuchando en el puerto 3000');
}); 