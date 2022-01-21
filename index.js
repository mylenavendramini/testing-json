const express = require('express');
const app = express(); // app is receiving the function express that comes from the module express; a copy of the framework will be created inside the app, so everthing im gonna use with express im gonna use with app; app is the mean thing now

app.get('/', function (req, res) {
  res.send('Welcome to my app');
}); // creating the mean route: call the variable app, get, and inside "/", a callback function with requisicao and resposta
// send is to send something

app.get('/about', function (req, res) {
  res.send('My page about');
});

app.get('/blog', function (req, res) {
  res.send('Welcome to my blog');
});
// open a server:
// 8081 is the door
// this function needs to be the last on in my code!

// app.listen(8081);

// after this, I have to type in the terminal:
// $ node index.js
// after this I can type in the browser:
// localhost:8081

// I could have a callback function:

app.listen(8081, function () {
  console.log('Server is working in the url http://localhost:8081');
});
