//play.js

const { connect } = require('./client');
console.log("Connecting ...");
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  //to handle the user input and allow you to quit the game using ctrl c, when you pass those keys to it, it will quit
  const handleUserInput = function(key) {
    if (key === '\u0003') {
     return process.exit();
    };
  }

  //the function that when you input ctrl c, it will do this call back function
  stdin.on('data', handleUserInput);

  return stdin;
}
setupInput();
