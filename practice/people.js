const fs = require('fs');
var a = async () =>{
    const b = await fs.readFile("./index.js").than(a => {
        console.log("======a",a);
        return a;
    })
    return b;
}

module.exports = {a}