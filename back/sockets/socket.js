module.exports = () => {
  const io = require('../bin/www');

  io.on('connect', (socket) => {
    socket.on('chat message', (msg) => {
      console.log(`[SOCKET] ${msg}`);
    });
  });
};
