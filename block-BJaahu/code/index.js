class Question {
    constructor(title, options, correctAnswerIndex) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
    
    isAnswerCorrect(answer)  {
        if(answer === this.correctAnswerIndex) return true;
        return false;
    }
    getCorrectAnswer () {
        return  this.options[this.correctAnswerIndex];
    }
}

Question.prototype = {
}

let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
);

