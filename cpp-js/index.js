// nodejs_example.js

const { spawn } = require("child_process");

// Define the command to execute the C++ program
const command = "g++ main.cpp";

// Define the input data to pass to the C++ program
const inputData = "10\n20\n";

// Spawn the child process
const childProcess = spawn(command);
console.log("=================");

let result = "";

// Capture the standard output from the child process
childProcess.stdout.on("data", (data) => {
  result += data.toString();
});

// Handle the child process exit event
childProcess.on("close", (code) => {
  if (code === 0) {
    // Successfully executed
    console.log("Result:", result);
  } else {
    console.error("Error executing the C++ program.");
  }
});

// Pass input data to the child process
childProcess.stdin.write(inputData);
childProcess.stdin.end();
