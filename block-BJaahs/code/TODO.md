If we want to build any app the two most important thing to think about is Data and Behavior. So for our quiz app let's break it down. To make a quiz app we need to create Single Question object.

### For single question we need the following data and methods:

- Data:
  - `title` (title of the question)
  - `options` (array of options)
  - `correctAnswerIndex` (index of the correct option)
- Methods:
  - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
  - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

### Create the object using the following ways

For each different ways of creating object write different solutions.

- Without Object
```js
// data for question
let title = "What is the capital city of Australia?";
let options = ['Sydney', 'Perth', "Canbarra", "harare"];
let correctAnswerIndex = 2;

//Methods for quiz
function isAnswerCorrect(index) {
    if(index === correctAnswerIndex) return true;
    return false;
}

function getCorrectAnswer() {
    return correctAnswerIndex;
}
```
- Organize using object
```js
// Organising with object
let question = {
    title: "What is the capital city of Australia?",
    options: ['Sydney', 'Perth', "Canbarra", "harare"],
    correctAnswerIndex: 2,
    isAnswerCorrect(index) {
        if(index === correctAnswerIndex) return true;
        return false;
    },
    getCorrectAnswer() {
        return correctAnswerIndex;
    },
};
```

- Use a function to create object
```js
// Using function to create object
function createQuestion(title, options, correctAnswerIndex) {
    let question = {};
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    question.isAnswerCorrect = function isAnswerCorrect(index) {
        if(index === question.correctAnswerIndex) return true;
        return false;
    };
    question.getCorrectAnswer = function getCorrectAnswer() {
        return question.correctAnswerIndex;
    };
};
```

- Convert the function to use `this` keyword
```js
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
```


- Write test by creating two objects also test both methods
```js
let que = createQuestion('Where is the capital of Jordan?',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1,);
que.isAnswerCorrect(1);
que.getCorrectAnswer();
```

### To test use the following data

```js
const testData = {
  title: 'Where is the capital of Jordan',
  options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  correctAnswerIndex: 1,
};
```
