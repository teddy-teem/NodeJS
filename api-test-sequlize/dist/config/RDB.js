"use strict";
const { Sequelize, DataTypes, Op } = require("sequelize");
const variables = require("../variables");
const sequelize = new Sequelize(variables.dbName, variables.dbUsername, variables.dbPassword, {
    host: variables.dbHost,
    dialect: variables.dbDialect,
    operatorsAliases: false,
});
sequelize
    .authenticate()
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err));
sequelize.sync().then(() => {
    console.debug("Synced with DB");
});
module.exports = { sequelize, DataTypes, Op };
