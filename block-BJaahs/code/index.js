// Using function to create object
function createQuestion(title, options, correctAnswerIndex) {
    let question = {};
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    question.isAnswerCorrect = function (index) {
        if(index === this.correctAnswerIndex) return true;
        return false;
    };
    question.getCorrectAnswer = function () {
        return this.correctAnswerIndex;
    };
    return question;
};
let que = createQuestion('Where is the capital of Jordan?',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1,);
que.isAnswerCorrect(1);
que.getCorrectAnswer();