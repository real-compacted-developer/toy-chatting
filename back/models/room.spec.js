// const jest = require('jest');
const Room = require('./room');
let myRoom = new Room();
// test('adds 1 + 2 to equal 3', () => {
//     expect(3).toBe(3);
//   });

test('roomCreateTest', () => {

  expect(myRoom.hasRoom(1111)).toBe(false);

  myRoom.create(1111);

  expect(myRoom.hasRoom(1111)).toBe(true);
});

test('roomJoinTest', () => {  
  myRoom.create(1111);
  expect(myRoom.hasNick(1111,'user')).toBe(false);
  
  expect(myRoom.hasNick(1111,'user')).toBe(true);
});

