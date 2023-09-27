const express = require("express");
const https = require("https");
const path = require("path");
const fs = require("fs");

const app = express();

app.use("/", (req, res) => {
  res.send("hello from ssl server");
});

// app.listen(3000, ()=>{
//     console.log()
// })

/**
 * install openssl if not installed
 * create a dir name 'cert'
 * inside cert dir command  `openssl genrsa -out key.pem`
 * key is generated
 * command certificate signin request `openssl req -new -key key.pem -out csr.pem`
 * now create ssl certificate command `openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem'
 *
 *
 *  **/

const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem"))
  },
  app
);
sslServer.listen(3443, () => {
  console.log("Secure server running on 3443");
});


