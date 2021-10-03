const express = require('express');
const config = require('config');


const app = express();

const PORT = config.get('port') || 3001;

const jsonParser = express.json();
  
app.post("/user", jsonParser, function (request, response) {
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);
     
    response.json(request.body);
});
  
app.get("/", function(request, response){
      
    response.sendFile(__dirname + "/cardData.json");
});

app.listen(PORT, () => console.log(`App has been started on ${PORT}`));

