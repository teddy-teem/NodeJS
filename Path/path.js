 console.clear();
 const path = require('path');
 
let myCurrentPath = __filename;
let pathObj = {
    dir: "user/local",
    name: "testfile",
    ext: ".js"
}
let x = path.format(pathObj)
console.log(path.parse(myCurrentPath));