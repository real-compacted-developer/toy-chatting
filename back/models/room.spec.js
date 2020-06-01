// const jest = require('jest');
const Room = require('./room');
let myRoom = new Room();
// test('adds 1 + 2 to equal 3', () => {
//     expect(3).toBe(3);
//   });

describe('roomCreateTest', () => {

  it('1111을 번호로 가지는 방이 있는지 확인한다.', () => {
    expect(myRoom.hasRoom(1111)).toBe(false);
  });
  it('1111을 번호로 가지는 방을 추가한다.', () => {
    myRoom.create(1111);
  });
  it('1111을 번호로 가지는 방이 있는지 확인한다.', () => {
    expect(myRoom.hasRoom(1111)).toBe(true);
  });

  describe('roomJoinTest', () => {
    it('1111을 번호로 가지는 방에 user를 nickname으로 가지는 사용자가 있는지 확인한다.', () => {
      expect(myRoom.hasNick(1111,'user')).toBe(false);
    });

    it('1111을 번호로 가지는 방에 user를 nickname으로 가지는 사용자를 추가한다.', () => {
      myRoom.join(1111,'user');
    });
    it('1111을 번호로 가지는 방에 user를 nickname으로 가지는 사용자가 있는지 확인한다.', () => {
      expect(myRoom.hasNick(1111,'user')).toBe(true);
    });
  })

  describe('roomExitTest', () => {
    it('1111을 번호로 가지는 방에 user를 nickname으로 가지는 사용자가 있는지 확인한다.', () => {
      expect(myRoom.hasNick(1111,'user')).toBe(true);
    });

    it('1111을 번호로 가지는 방에 user를 nickname으로 가지는 사용자를 제거한다.', () => {
      myRoom.exit(1111,'user');
    });
    it('1111을 번호로 가지는 방에 user를 nickname으로 가지는 사용자가 있는지 확인한다.', () => {
      expect(myRoom.hasNick(1111,'user')).toBe(false);
    });
  })

  describe('roomDeleteTest', () => {
    it('1111을 번호로 가지는 방이 있는지 확인한다.', () => {
      expect(myRoom.hasRoom(1111)).toBe(true);
    });
    it('1111을 번호로 가지는 방을 제거한다.', () => {
      myRoom.delete(1111);
    });
    it('1111을 번호로 가지는 방이 있는지 확인한다.', () => {
      expect(myRoom.hasRoom(1111)).toBe(false);
    });
  })
});