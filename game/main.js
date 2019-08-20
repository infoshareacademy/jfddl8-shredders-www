class Game {
  constructor() {
    this.level = +localStorage.getItem("level") || 1;
    this.score = +localStorage.getItem("score") || 0;
    this.lives = +localStorage.getItem("lives") || 5;
    this.gameTick = 40; //ms

    this.cointainer = document.querySelector(".container");

    this.counter = 0;
    this.notes = [];
    this.drum = null;
    this.gameBoxCenter = null;
    this.gameBoxCenterNotes = null;
    this.gameBoxLeftLives = null;
    this.gameBoxLeftLevel = null;
    this.gameBoxRightScore = null;
    this.gameBox = null;
    this.interval = null;
  }

  init() {
    this.gameBox = this.divCreate();
    this.gameBox.classList.add("game-box");
    this.cointainer.appendChild(this.gameBox);

    const gameBoxLeft = this.divCreate();
    gameBoxLeft.classList.add("game-box__left");
    this.gameBox.appendChild(gameBoxLeft);

    this.gameBoxLeftLives = this.divCreate();
    this.gameBoxLeftLives.classList.add("game-box__left__lives");
    gameBoxLeft.appendChild(this.gameBoxLeftLives);

    this.gameBoxLeftLevel = this.divCreate();
    this.gameBoxLeftLevel.classList.add("game-box__left__level");
    gameBoxLeft.appendChild(this.gameBoxLeftLevel);

    this.gameBoxCenter = this.divCreate();
    this.gameBoxCenter.classList.add("game-box__center");
    this.gameBox.appendChild(this.gameBoxCenter);

    this.gameBoxCenterNotes = this.divCreate();
    this.gameBoxCenterNotes.classList.add("game-box__center__notes");
    this.gameBoxCenter.appendChild(this.gameBoxCenterNotes);

    const gameBoxRight = this.divCreate();
    gameBoxRight.classList.add("game-box__right");
    this.gameBox.appendChild(gameBoxRight);

    this.gameBoxRightScore = this.divCreate();
    this.gameBoxRightScore.classList.add("game-box__right__score");
    gameBoxRight.appendChild(this.gameBoxRightScore);

    this.gameBoxLeftLives.innerText = "Lives: " + this.lives;
    this.gameBoxLeftLevel.innerText = "Level: " + this.level;
    this.gameBoxRightScore.innerText = "Score: " + this.score;

    return this;
  }

  splashScreenInit() {
    const splashScreen = this.divCreate();
    splashScreen.classList.add("splash-screen");
    this.gameBox.appendChild(splashScreen);

    const splashText = this.divCreate();
    splashText.classList.add("splash-text");
    splashText.innerText =
      "Play the Game ! Use mouse and catch flying notes that give You points. Don't catch anything else than notes, it causes loosing points. If You score 50 points level will be changed for higher. Game will be finished If You loose more than 25 points in level.";
    splashScreen.appendChild(splashText);

    const playButton = this.divCreate();
    playButton.classList.add("play-button");
    playButton.innerText = "Play it!";
    playButton.addEventListener("click", () => {
      splashScreen.parentNode.removeChild(splashScreen);
      this.addDrum();
      this.addNote();

      this.startGame();
    });
    splashScreen.appendChild(playButton);
  }

  loseScreen() {
    const loseScreen = this.divCreate();
    loseScreen.classList.add("splash-screen");
    this.gameBox.appendChild(loseScreen);

    const loseText = this.divCreate();
    loseText.classList.add("splash-text");
    loseText.innerText = `You lose.
    Your score: ${this.score}`;
    loseScreen.appendChild(loseText);

    const playAgainButton = this.divCreate();
    playAgainButton.classList.add("play-button");
    playAgainButton.innerText = "Play again!";
    playAgainButton.addEventListener("click", () => {
      loseScreen.parentNode.removeChild(loseScreen);
      this.cointainer.innerText = "";
      this.init();
      this.addDrum();
      this.addNote();

      this.startGame();
    });
    loseScreen.appendChild(playAgainButton);
  }

  divCreate() {
    return document.createElement("div");
  }

  startGame() {
    this.interval = setInterval(this.body.bind(this), this.gameTick);
  }

  addNote() {
    const velocity =
      (1 + this.level / 3) * Math.floor(Math.random() * 50 + 100);
    const a = Math.floor(Math.random() * 35 + 25);
    const note = new Note(this.gameBoxCenterNotes, a, velocity);
    note.init();
    this.notes.push(note);
  }

  addDrum() {
    this.drum = new Drum(this.gameBoxCenter);
    this.drum.init();
    this.drum.append();
  }

  removeNote(index) {
    this.notes = this.notes.filter((note, i) => i !== index);
  }

  isColision(note, index) {
    if (note.positionY >= this.gameBoxCenterNotes.offsetHeight - note.a - 20) {
      if (
        (note.positionX >= this.drum.positionX &&
          note.positionX <= this.drum.positionX + this.drum.drum.offsetWidth) ||
        (note.positionX + note.a >= this.drum.positionX &&
          note.positionX + note.a <=
            this.drum.positionX + this.drum.drum.offsetWidth)
      ) {
        this.score += 10;
        this.gameBoxRightScore.innerText = "Score: " + this.score;
        if (this.score % 100 === 0) {
          this.level++;
          this.gameBoxLeftLevel.innerText = "Level: " + this.level;
        }
        this.removeNote(index);
        return;
      }
    }

    if (note.positionY >= this.gameBoxCenterNotes.offsetHeight - note.a - 5) {
      this.removeNote(index);
      this.lives--;
      this.gameBoxLeftLives.innerText = "Lives: " + this.lives;
    }
  }

  loseGame() {
    clearInterval(this.interval);
    this.loseScreen();
    this.lives = 5;
    this.level = 1;
    this.score = 0;
    this.notes = [];
  }

  body() {
    this.gameBoxCenterNotes.innerText = "";

    if (this.lives <= 0) {
      this.loseGame();
      return;
    }

    this.notes.forEach((note, index) => {
      this.gameBoxCenterNotes.appendChild(note.note);
      note.move();
      this.isColision(note, index);
    });

    this.counter++;
    if (this.counter >= 50 - this.level * 5) {
      this.addNote();
      this.counter = 0;
    }
  }
}

const game = new Game();
game.init();
game.splashScreenInit();
// this.drum = new Drum(gameBoxCenter)
// gameBoxCenter.appendChild(this.drum)
