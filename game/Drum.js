class Drum {
  constructor(container) {
    this.drum = null
    this.positionX = 50
    this.container = container
  }

  moveDrum(event) {
    this.positionX =
      event.pageX -
      this.container.getBoundingClientRect().left -
      this.drum.offsetWidth / 2

    if (this.positionX <= 0) this.positionX = 0

    if (this.positionX + this.drum.offsetWidth >= this.container.offsetWidth)
      this.positionX = this.container.offsetWidth - this.drum.offsetWidth - 2

    this.drum.style.left = this.positionX + 'px'
  }

  init() {
    this.drum = document.createElement('div')

    this.drum.style.backgroundColor = 'red'
    this.drum.style.height = '20px'
    this.drum.style.width = '60px'
    this.drum.style.borderRadius = '10px'
    this.drum.style.position = 'absolute'
    this.drum.style.left = this.positionX + '%'
    this.drum.style.bottom = '0' // zmienić na bottom 0

    this.container.addEventListener('mousemove', event => {
      this.moveDrum(event)
    })

    return this
  }

  append() {
    this.container.appendChild(this.drum)
  }
}
