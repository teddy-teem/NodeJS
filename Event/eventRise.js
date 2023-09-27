console.clear();

let EventEmitter = require("events");


class School extends EventEmitter  { // must be extended
    Emitter(){
        let ev = new EventEmitter();
        ev.on("bell", ()=>{
            console.log("Hello Bell");
        })
        setTimeout(()=>{
            ev.emit("bell");
        },2000);
    }
};

module.exports = School;

