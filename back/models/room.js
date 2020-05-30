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
    this.rooms.get(roomNumber).set(nickname);
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
}