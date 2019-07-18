class Note {
  constructor(container, a, velocity) {
    this.a = a || 50
    this.b = a || 50
    this.velocity = velocity || 50 // px/s
    this.gameTick = 40 // ms
    this.note = null
    this.container = container || document.body
    this.containerWidth = this.container.offsetWidth
    this.containerHeight = this.container.offsetHeight
    this.positionY = 0
    this.positionX = Math.random() * 0.9 * this.containerWidth
  }
  init() {
    this.note = document.createElement('div')
    this.note.style.width = this.a + 'px'
    this.note.style.height = this.b + 'px'
    this.note.style.borderRadius = '50%'
    this.note.style.backgroundColor = 'green'
    this.note.style.position = 'absolute'
    this.note.style.top = this.positionY
    this.note.style.left = this.positionX + 'px'

    return this.note
  }

  move() {
    this.positionY += (this.velocity * this.gameTick) / 1250
    this.note.style.top = this.positionY + 'px'
  }
}
