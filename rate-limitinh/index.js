const express = require("express");
const limiter = require('express-rate-limit')

const app = express();

// app.use(limiter({ // for application level middleware
//     windowMs: 5000,
//     max:5,
//     message: {
//         code: 429,
//         message: "Too many call"
//     }
// })) 

const getLimiter = limiter({ // for Routing level middleware
    windowMs: 5000,
    max:5,
    message: {
        code: 429,
        message: "Too many call"
    }
});

app.get('/', getLimiter, (req, res)=> res.send('Hello from a rate limited app'));
app.get('/api', (req, res)=> res.send('only certain request will be allowed'));
app.get('/open', (req, res)=> res.send('only certain request will be allowed'));
app.get('/open', (req, res)=> res.send('open for new request'));
app.get('/register', (req, res)=> res.send('register'));



app.listen(3000, ()=>{
    console.log("Running on port http://localhost:3000");
})