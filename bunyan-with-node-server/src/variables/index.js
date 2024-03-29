const appPort = process.env.APP_PORT;
const appHost = process.env.APP_HOST || "localhost";
const env = process.env.APP_ENV;
const mysqlPassword = process.env.MYSQL_PASSWORD;
const variables = {
  appPort,
  appHost,
  env,
  mysqlPassword,
};

module.exports = variables;
