class Note {
  constructor(a, velocity, y) {
    this.a = a;
    this.b = a;
    this.velocity = velocity;
    this.position = { x: null, y: y };
    this.note = null;
  }
  init() {
    this.note = new Note(20);
  }

  move(randomX, deltaY) {
    this.position = {
      x: this.position.x + randomX,
      y: this.position.y + deltaY
    };
  }
}

const randomX = function() {
  return Math.floor(Math.random() * 90 + 5);
};
