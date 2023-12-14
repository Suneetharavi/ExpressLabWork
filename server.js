const express = require('express')

const app= express();

const magicResponse = require("./models/magic");

app.get('/',(req, res) =>{
    res.send('<h1>Hello Express HomePage</h1>');
  });

  app.get('/:name', (req, res) =>{
  
    res.send(`<h3>Wow! Hello there, ${req.params.name}, How are you?<h3>`)
    
  });

  app.get('/tip/:total/:tipPercentage', function(req, res) {
    const percentage = (req.params.total)*(req.params.tipPercentage / 100)
    res.send(`<h1>The Tip to be paid is ${percentage} </h1>`);
  });

  app.get("/magic/:question", (req, res) => {
    let chooseAnsRandom = Math.floor(Math.random() * (19-0)+0);
    // console.log(magicResponse[chooseAnsRandom])
    res.send(`<h2>${req.params.question}</h2>  <h4>${magicResponse[chooseAnsRandom]}</h4>`);
  });


  app.listen(3000, function () {
    console.log('Listening on port 3000');
  });