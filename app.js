/*
* Yandex cloud test
*
*/

//Dependencies 
var express = require('express');
var path = require('path');
var app = express();

//Set location for static files
app.use(express.static(path.join(__dirname, 'public')));


//Constants
const port = 3000;


//Routing
app.get('/', (req, res)=>{
    res.send("Hello, Yandex Cloud!");
});

//Start up the server
app.listen(port, ()=>{
    console.log(`The Yandex Cloud app is running and listening on port ${port}`);
});
