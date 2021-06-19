console.clear();

let x = require("./eventRise");
let e = new x();


 e.on("bell", ()=>{
     console.log("Ok Bro");
 });
 e.Emitter();