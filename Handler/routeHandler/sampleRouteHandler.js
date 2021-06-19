

const handler = {};
handler.sampleHandler = (requestProperties, callback)=>{
    callback(200, {
        message: "I am from simple url"
    })
}

module.exports = handler;