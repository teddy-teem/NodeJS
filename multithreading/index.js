const express = require("express");
const { Worker } = require("worker_threads");
const app = express();

app.get("/heavy", (req, res) => {
  const worker = new Worker("./worker.js");
  worker.on("message", (data) => {
    console.log(data);
    res.send(
      `The result is: ${data.total}\nTaken time to calculate ${data.time}s`
    );
  });
  worker.on("error", (error) => {
    res.send(`The result is: ${error}`);
  });
});
app.get("/", (req, res) => {
  res.send(`Hello normal ${req.query.hi}`);
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000/");
  console.log("worker pid = ", process.pid);
});
