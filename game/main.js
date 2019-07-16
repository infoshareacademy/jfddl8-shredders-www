class Game {
  constructor() {
    this.level = +localStorage.getItem('level') || 1
    this.score = +localStorage.getItem('score') || 0
    this.lives = +localStorage.getItem('lives') || 5

    this.cointainer = document.querySelector('.container')

    this.gameBoxLeftLives = null
    this.gameBoxLeftLevel = null
    this.gameBoxRightScore = null
    this.gameBox = null
  }

  init() {
    this.gameBox = this.divCreate()
    this.gameBox.classList.add('game-box')
    this.cointainer.appendChild(this.gameBox)

    const gameBoxLeft = this.divCreate()
    gameBoxLeft.classList.add('game-box__left')
    this.gameBox.appendChild(gameBoxLeft)

    this.gameBoxLeftLives = this.divCreate()
    this.gameBoxLeftLives.classList.add('game-box__left__lives')
    gameBoxLeft.appendChild(this.gameBoxLeftLives)

    this.gameBoxLeftLevel = this.divCreate()
    this.gameBoxLeftLevel.classList.add('game-box__left__level')
    gameBoxLeft.appendChild(this.gameBoxLeftLevel)

    const gameBoxCenter = this.divCreate()
    gameBoxCenter.classList.add('game-box__center')
    this.gameBox.appendChild(gameBoxCenter)

    const gameBoxRight = this.divCreate()
    gameBoxRight.classList.add('game-box__right')
    this.gameBox.appendChild(gameBoxRight)

    this.gameBoxRightScore = this.divCreate()
    this.gameBoxRightScore.classList.add('game-box__right__score')
    gameBoxRight.appendChild(this.gameBoxRightScore)

    this.gameBoxLeftLives.innerText = 'Lives: ' + this.lives
    this.gameBoxLeftLevel.innerText = 'Level: ' + this.level
    this.gameBoxRightScore.innerText = 'Score: ' + this.score

    this.splashScreenInit()

    return this
  }

  splashScreenInit() {
    const splashScreen = this.divCreate()
    splashScreen.classList.add('splash-screen')
    this.gameBox.appendChild(splashScreen)

    const splashText = this.divCreate()
    splashText.classList.add('splash-text')
    splashText.innerText = 'To play use mouse, earn notes and avoid guitars!'
    splashScreen.appendChild(splashText)

    const playButton = this.divCreate()
    playButton.classList.add('play-button')
    playButton.innerText = 'Play it!'
    playButton.addEventListener('click', function() {
      splashScreen.parentNode.removeChild(splashScreen)
    })
    splashScreen.appendChild(playButton)
  }

  divCreate() {
    return document.createElement('div')
  }
}
