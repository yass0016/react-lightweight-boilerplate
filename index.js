var express = require('express');
var config = require('./config');
var helloworld = require('./routes/helloworld');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index.pug', { title: 'Home' });
});

app.use('/helloworld', helloworld);
app.use(express.static(__dirname + '/static'));

app.listen(config.port, (err) => {
  if(err)
    console.log(err);
  else
    console.log(`listening on port ${config.port}`);
});
