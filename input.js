//input.js

//Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  //the function that when you input ctrl c, it will do this call back function
  stdin.on('data', handleUserInput);

  return stdin;
}

  //to handle the user input and allow you to quit the game using ctrl c, when you pass those keys to it, it will quit
  const handleUserInput = function(key) {
    if (key === '\u0003') {
     return process.exit();
    }

    if (key === "w") {
      connection.write("Move: up")
    }

    if (key === "a") {
      connection.write("Move: left");
    }

    if (key === "s") {
      connection.write("Move: down");
    }

    if (key === "d") {
      connection.write("Move: right")
    }
  }

module.exports = { setupInput };