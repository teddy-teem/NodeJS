
const appPort = process.env.PORT;
const mongoPass = process.env.MONGO_PASSWORD;

const variables = {
    appPort,
    mongoPass
};

module.exports = variables;