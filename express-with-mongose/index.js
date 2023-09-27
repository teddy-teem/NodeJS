require("dotenv").config();
const express = require("express");
const useRoutes = require("./routes");
const variables = require("./helpers/variables");
const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb+srv://jahid:${variables.mongoPass}@cluster0.eayrz47.mongodb.net/TestDB?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .catch((e) => {
    console.log("======", e);
  });
const app = express();
app.use(express.json());
app.use(useRoutes);
app.listen(variables.appPort, () => {
  console.log(`===========>>>>listening on port ${variables.appPort}`);
});

module.exports = app;
