

const handler = require("./Handler/routeHandler/sampleRouteHandler")
const notFound = require("./Handler/notFound/notFound");



const routes = {
    'sample': handler.sampleHandler,
    'notFound': notFound.notFoundHandler
}


module.exports = routes;