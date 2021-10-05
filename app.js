const express = require('express');
const config = require('config');
const cors = require('cors');

const app = express();

const PORT = config.get('port') || 3001;

const jsonParser = express.json();
app.use('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next(); 
    });
    
    //enable pre-flight
    app.options('*', cors());
  
app.post("/user", jsonParser, function (req, res, next) {
    console.log(req.body);
    if(!req.body) return res.sendStatus(400);
     
    res.json(req.body);
    next();
});
  
app.get("/", function(req, res, next){
    res.set('Access-Control-Allow-Origin', '*');   
    res.sendFile(__dirname + "/client/public/cardData.json");
    
});

app.listen(PORT, () => console.log(`App has been started on ${PORT}`));

