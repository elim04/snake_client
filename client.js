const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  //establishing event data handler
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  //once you have connected, it will console log the statement to you and write your name to the snake in the server
  conn.on('connect', () => {
    console.log("You have successfully connected to the game server!");
    conn.write("Name: EEL");
  })

  conn.on('connect', () => {

    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 100);

    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 200);

    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 100)

  })

  return conn;
}


module.exports = { connect };