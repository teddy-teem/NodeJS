const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors())


app.get("/", (req, res) => {
  res.send({ message: "Success" });
});
app.get("/data", (req, res) => {
  res.send({ message: "Success", data: { name: "Jahid", id: 1 } });
});

app.listen(3000, () => {
  console.log(`Server running on http://192.168.1.123:3000`);
});
