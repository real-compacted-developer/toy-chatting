module.exports = class Room {
  constructor() {
    this.rooms = new Map();
  }
  create(roomNumber) {
    if(this.rooms.has(roomNumber)) {
      return;
    }
    this.rooms.set(roomNumber, new Set());
  }
  
  delete(roomNumber){
    if(!this.rooms.has(roomNumber)) {
      return;
    }
    this.rooms.delete(roomNumber);
  }
  
  join(roomNumber, nickname) {
    if(!this.rooms.has(roomNumber)) {
      return;
    }
    this.rooms.get(roomNumber).add(nickname);
  }

  exit(roomNumber, nickname) {
    if(!this.rooms.has(roomNumber)){
      return;
    }
    this.rooms.get(roomNumber).delete(nickname);
  }

  hasRoom(roomNumber) {
    return this.rooms.has(roomNumber);
  }
  
  /**
   * 
   * @param {*} roomNumber 사용자가 입장하려는 방 번호
   * @param {*} nickname 사용자 닉네임
   * 사용자가 입장하려는 방에 같은 닉네임이 있으면 true, 없으면 false를 리턴한다.
   */
  hasNick(roomNumber,nickname) {
    return this.rooms.get(roomNumber).has(nickname);
  }
}