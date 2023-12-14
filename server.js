const express = require('express')

const app= express();

app.get('/',(req, res) =>{
    res.send('<h1>Hello Express HomePage</h1>');
  });

  app.get('/:name', (req, res) =>{
  
    res.send(`<h3>Wow! Hello there, ${req.params.name}, How are you?<h3>`)
    
  });

  app.get('/calculator', function(req, res) {
    res.send('<h1>Hello Express CalculatorPage</h1>');
  });

  app.listen(3000, function () {
    console.log('Listening on port 3000');
  });