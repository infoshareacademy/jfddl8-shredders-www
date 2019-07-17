class Note {
  constructor(a, velocity, container) {
    this.a = a || 50;
    this.b = a || 50;
    this.velocity = velocity || 50; // px/s
    this.gameTick = 40; // ms
    this.positionX = null;
    this.positionY = 0;
    this.note = null;
    this.container = container || document.body;
    this.containerWidth = this.container.offsetWidth;
    this.containerHeight = this.container.offsetHeight;
  }
  init() {
    this.note = document.createElement("div");
    this.note.style.width = this.a + "px";
    this.note.style.height = this.b + "px";
    this.note.innerText = "nutka";
    this.note.style.backgroundColor = "green";
    this.note.style.position = "absolute";
    this.note.style.top = this.positionY;
    this.positionX = Math.random() * this.containerWidth;
    this.note.style.left = this.positionX + "px";

    return this.note;
  }

  move() {
    this.positionY += (this.velocity * this.gameTick) / 1250;
  }
}
