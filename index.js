/*
    TITLE: Uptime Monitoring Apps
    Descrip: Restful API for the APS
    Author: Jahid Hasan
*/


//dependences
const http = require("http");
const url = require("url");
const {StringDecoder} = require('string_decoder');
const {handleReqRes} = require("./helpers/handleReqRes");


//app object;
const app = {};

app.config = {
    port: 3000
};

app.createServer = ()=>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, ()=>{
        console.log("Running on port " + app.config.port);
        console.log("Environment variable is: "+process.env);
    });
};

//Handle Req Res
app.handleReqRes = handleReqRes;


app.createServer();