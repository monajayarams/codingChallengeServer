const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

let inputJSON;
fs.readFile('resources/input.json', 'utf8', function (err, data) {
    if (err) throw err;
    inputJSON = JSON.parse(data);
});
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.get('/getCodeChallengeListItems', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(inputJSON);
});

app.post('/sendMessage',(req,res) => {
    let random = Math.floor(Math.random() * 10);
    let isSuccess = random % 2 == 0;
    let responseMessage = isSuccess ? "Message Received..! Thank you." : "Message Denied..! Thank you.";
	res.setHeader('Access-Control-Allow-Origin', '*');
    let response = {
        "requestMessage": req.body.message,
        "responseMessage": responseMessage
    };

    if(!isSuccess){
        res.status(400).json(response);
    } else {
        res.status(200).json(response);
    }
});

// listen for requests
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening on port 3000");
});