class Question {
    constructor(title, options, correctAnswerIndex) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
    isCorrect(answer) {
        if(answer === this.correctAnswerIndex) return true;
        return false;
    }
    getCorrectAnswer() {
        return this.options[this.correctAnswerIndex];
    }
    createUI() {
        let que = document.createElement("h3");
        let opts = document.createElement("div");
        this.options.forEach(option => {
            let opt = document.createElement("div");
            opt.innerText = 
        });
    }
}

let root = document.querySelector(".root");
