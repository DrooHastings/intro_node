var express = require('express');// bringing in express
var path = require ('path');
var app = express();// calling the function that is the express code
var bodyParser = require ('body-parser');

var songData = [
  {name: 'shake it off'},
  {name: 'what is going on'}

];

app.use(express.static('public')); //middle ware happens in between recieving and handeling request
//means these things are okay to send out
app.use(bodyParser.urlencoded({extended: true}));
console.log('HEY CLASS');

app.get('/', function(req, res){  // the 'slash /' indicates the homepage
  console.log('in get route');
  res.sendFile(path.join(__dirname,'public/index.html'));
});

app.get('/song', function(req, res){
  console.log('in get song route');
  //all the work
  res.send(songData);
});

app.post('/song', function(req, res){
  console.log('in post route');
  console.log('req.body ->', req.body);
  songData.push(req.body);
  res.sendStatus(200);
});

app.listen(3000, function(){   //listening on this port
  console.log('listening on port 3000');


});
