const { parentPort } = require("worker_threads");

let st = performance.now()

let total = 0;
for (let i = 0; i < 100000000000; i++) {
  total += i;
  // :smile
}
let en = performance.now()

parentPort.postMessage({total, time: (en-st)/1000});
