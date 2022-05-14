class History {
    #historyArray
    constructor() {
      this.#historyArray = []
    }
  
    getHistory() {
      return this.readPreviousHistory()
    }
  
    pushToHistory(game) {
      const filterData = this.extractImportantData(game)
      this.#historyArray.push(filterData)
    }
  
    readPreviousHistory() {
      const localStoredArray = localStorage.getItem('savedData')
      if (localStoredArray) {
        const parsedArray = JSON.parse(localStoredArray)
        return parsedArray
      }
      return []
    }
  
    saveToLocalStorage(game) {
      const filterData = this.extractImportantData(game)
      const currentSave = this.readPreviousHistory()
      const newSave = [...currentSave, filterData]
      const historyArray = JSON.stringify(newSave)
      localStorage.setItem('savedData', historyArray)
    }
  
    extractImportantData(game) {
      const score = game.showScore()
      const maxLevel = game.getCurrentLevel()
      const didWin = game.getPlayer().getGameResult()
      const nickname = game.getPlayer().getNickname()
      const data = { score, maxLevel, didWin, nickname }
      return data
    }
  }
  export default History