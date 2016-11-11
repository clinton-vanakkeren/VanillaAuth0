var express = require('express'),
    app = express(),
    port = process.env.Port || 8080,
    router = express.Router();
app.set('view engine','jade');
app.set('views', __dirname+'/src/client');
router.use(function(req,res,next){
  console.log("something is happening");
  next();
});

app.use(express.static(__dirname));
router.get('/', function(req,res){
  res.render('index');
});
app.use(router);
app.listen(port);
console.log('magic happens on port'+' '+port);
