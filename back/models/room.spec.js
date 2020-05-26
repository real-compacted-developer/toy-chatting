// const jest = require('jest');
const Room = require('./room');


// test('adds 1 + 2 to equal 3', () => {
//     expect(3).toBe(3);
//   });

test('roomTest', () => {
    let myRoom = new Room();

    expect(myRoom.hasRoom(1111)).toBe(false);

    myRoom.create(1111);

    expect(myRoom.hasRoom(1111)).toBe(true);
});