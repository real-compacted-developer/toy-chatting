module.exports = () => {
  const io = require('../bin/www');
  const OPCODE = require('./op-code');

  io.on('connect', (socket) => {
    socket.on(OPCODE.CHAT, (roomId, nickname, msg) => {
      io.to(roomId).emit(OPCODE.CHAT, nickname, msg);
      console.log(`[CHAT] #${roomId} ${nickname}: ${msg}`);
    });

    socket.on(OPCODE.JOIN, (id) => {
      socket.join(id, () => {
        io.to(id).emit(OPCODE.JOIN, `${id} 방에 누군가 들어왔습니다.`);
      });
    });

    socket.on(OPCODE.LEAVE, (id) => {
      socket.leave(id, () => {
        io.to(id).emit(OPCODE.LEAVE, `${id} 방에서 누군가 나갔습니다.`);
      });
    });
  });
};
