//dependence
const url = require("url");
const {StringDecoder} = require('string_decoder');
const routes = require("../routes")
const { sample } = require("../routes");

const handler = {}

handler.handleReqRes = (req, res)=>{
    //request handleing
    //get the url and parse it

    const parseUrl = url.parse(req.url, true);
    // true means consider query string 
    // false  means don't consider
    const path = parseUrl.path;
    const trimedPath = path.replace(/^\/+|\/+$/g , '');
    const method = req.method.toLowerCase();
    const queryStrig = parseUrl.query;
    const header = req.headers;
    const decoder = new StringDecoder('utf-8');
    let realData = '';
    const requestProperties = {
        parseUrl,
        path,
        trimedPath,
        method,
        queryStrig,
        header
    }
    let chosenHandler = routes[trimedPath] ? routes[trimedPath]: routes['notFound'];
    
    req.on("data", (buffer)=>{
        realData += decoder.write(buffer);
    });
    req.on("end", ()=>{
        realData += decoder.end();
        chosenHandler(requestProperties, (statusCode, payload)=>{
            statusCode = typeof(statusCode) ==='number' ? statusCode :5000;
            payload = typeof(payload) ==='object' ? payload :{};
    
            const payloadString = JSON.stringify(payload);
    
            res.writeHead(statusCode);
            res.end(payloadString);
        });
    });
        //response
        
}

module.exports = handler;