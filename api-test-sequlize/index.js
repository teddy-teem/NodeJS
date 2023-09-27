require("dotenv").config();
const express = require("express");
const useRoutes = require("./router");
const app = express();
app.use(express.json());
app.use(useRoutes);
app.listen(variables.appPort, () => {
  console.log(
    chalk.green.inverse(`===========>>>>listening on port ${variables.appPort}`)
  );
});

module.exports = app;
