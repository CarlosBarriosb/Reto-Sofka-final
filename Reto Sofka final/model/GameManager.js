import { levelOne } from '../db/levelOne.js'
import { levelTwo } from '../db/levelTwo.js'
import { levelThree } from '../db/levelThree.js'
import { levelFour } from '../db/levelFour.js'
import { levelFive } from '../db/levelFive.js'

import Display from './Display.js'
import Game from './Game.js'
import History from './History.js'
import Player from './Player.js'
import Question from './Question.js'

const questions = [
  new Question(levelOne),
  new Question(levelTwo),
  new Question(levelThree),
  new Question(levelFour),
  new Question(levelFive),
]

const singleGameInstance = new Game(questions, new Player('defaultUser'))
const singleDisplayInstance = new Display()
class GameManager {
  constructor() {}

  startNewGame() {
    singleDisplayInstance.nickNameScreen(singleGameInstance, this.startGameButtonCallback, this.historyButtonCallback)
  }

  startGameButtonCallback() {
    singleDisplayInstance.questionScreen(singleGameInstance)
  }
  historyButtonCallback() {
    const history = new History()
    singleDisplayInstance.historyScreen(history)
  }

  questionScreenManager() {
    singleDisplayInstance.questionScreen(singleGameInstance)
  }
}

export default GameManager