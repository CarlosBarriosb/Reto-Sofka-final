class Player {
    #nickname
    #won
    #answers
  
    constructor(nickname) {
      this.#nickname = nickname
      this.#won = false
      this.#answers = []
    }
  
    setNickname(nickname) {
      this.#nickname = nickname
    }
  
    getNickname() {
      return this.#nickname
    }
  
    getGameResult() {
      return this.#won
    }
  
    setPlayerVictory() {
      this.#won = true
    }
  
    addAnswerChosen(answer) {
      this.#answers.push(answer)
    }
  
    getCurrentAnswerByLevel(level) {
      return this.#answers[level]
    }
  }
  
  export default Player