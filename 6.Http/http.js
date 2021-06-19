console.clear();


let http = require('http');


let server = http.createServer((req, res)=>{
    res.write("Done\n");
    if(req.url == '/')
        res.write("How are u ?");
    else
        res.write("I am fine");
    res.end();
});



server.listen(3000);
console.log("listening on prot 3000");