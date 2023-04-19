class Question {
    constructor(title, options, correctAnswerIndex) {
      this.title = title;
      this.options = options;
      this.correctAnswerIndex = correctAnswerIndex;
    }
  
    isCorrect(answer) {
        return answer === this.getCorrectAnswer();
      }
  
    getCorrectAnswer() {
      return this.options[this.correctAnswerIndex];
    }
  
    createUI() {
      root.innerHTML = `<input type="submit" value="Submit" class="btn">`;
      let que = document.createElement("legend");
      que.innerText = this.title;
      let opts = document.createElement("div");
      this.options.forEach((option) => {
        let opt = document.createElement("input");
        opt.type = "radio";
        opt.value = option;
        opt.id = option;
        opt.name = "answerOption";
        let label = document.createElement("label");
        label.innerText = option;
        label.for = option;
        opts.append(opt, label);
      });
      root.prepend(que, opts);
    }
}
  
class Questionare {
    constructor(allQuestions = [], activeIndex = 0, score = 0) {
      this.allQuestions = allQuestions.map(
        (question) =>
          new Question(
            question.title,
            question.options,
            question.correctAnswerIndex
          )
      );
      this.activeIndex = activeIndex;
      this.score = score;
    }
  
    createUI() {
      this.allQuestions[this.activeIndex].createUI();
      root.append(`Score: ${this.score}`);
    }
  
    prevQuestion() {
      if (this.activeIndex > 0) this.activeIndex--;
      this.createUI();
    }
  
    nextQuestion() {
      this.activeIndex++;
      this.createUI();
    }
  
    updateScore(answer) {
        if (this.allQuestions[this.activeIndex].isCorrect(answer)) this.score++;
    }
}
  
let root = document.querySelector(".root");
let quiz = new Questionare(questionsData);
quiz.createUI();

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
event.preventDefault();
handleSubmit();
});
//
function handleSubmit() {
let answer = document.querySelector('input[name="answerOption"]:checked');
if (!answer) {
    alert("Please select an answer!");
    return;
}
quiz.updateScore(answer.value);
quiz.nextQuestion();
quiz.createUI();
}

let prevBtn = document.querySelector(".prev");
prevBtn.addEventListener("click", quiz.prevQuestion.bind(quiz));

let nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", quiz.nextQuestion.bind(quiz));