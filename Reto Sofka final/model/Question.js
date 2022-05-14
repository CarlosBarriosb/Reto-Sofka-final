class Question {
    #question
    constructor(questionsByLevel) {
      this.#question = this.getRandomQuestion(questionsByLevel)
    }
  
    getQuestion() {
      return this.#question
    }
  
    getQuestionTitle() {
      return this.#question.question
    }
  
    getCorrectAnswer() {
      return this.#question.correctAnswer
    }
  
    getAnswersArray() {
      return this.#question.answers
    }
  
    getRandomQuestion(questionArray) {
      const random = this.#generateRandomNumber(questionArray.length)
      return questionArray[random]
    }
  
    #generateRandomNumber(n) {
      return Math.floor(Math.random() * n)
    }
  }
  
  export default Question