module.exports = () => {
  const io = require('../bin/www');

  io.on('connect', (socket) => {
    socket.on('chat', (nickname, msg) => {
      io.emit('chat', nickname, msg);
      console.log(`[CHAT] ${nickname}: ${msg}`);
    });
  });
};
