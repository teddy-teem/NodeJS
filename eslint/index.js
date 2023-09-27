const express = require("express");

const app = express();

const x = 10;
app.get('/', (req, res)=>{
    res.send("hello", x);
})

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
