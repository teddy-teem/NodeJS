import express from "express";
const app = express();

app.get("/heavy", (req, res) => {
let st = performance.now()
  let total = 0;
  for (let i = 0; i < 1000000000; i++) {
    total += i;
  }
  let en = performance.now()
  res.send(`The result is: ${total}\nTaken time to calculate ${(en-st)/1000}s`);
});
app.get("/", (req, res)=>{
    
    res.send(`Hello normal ${req.query.hi}`)
})

app.listen(3000, ()=>{
    console.log("Listening on http://localhost:3000/");
    console.log("worker pid = ",process.pid)
})