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

- Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)
```js
let methods = {
    isAnswerCorrect: (answer) => {
        if(answer === this.correctAnswerIndex) return true;
        return false;
    },
    getCorrectAnswer: () => {
        return  this.options[this.correctAnswerIndex];
    },
}
function Question(title, options, correctAnswerIndex) {
    let obj = Object.create(methods);
    obj.title = title;
    obj.options = options;
    obj.correctAnswerIndex = correctAnswerIndex;
    return obj;
}
```
- Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)
```js
function Question(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
}

Question.prototype = {
    isAnswerCorrect: (answer) => {
        if(answer === this.correctAnswerIndex) return true;
        return false;
    },
    getCorrectAnswer: () => {
        return  this.options[this.correctAnswerIndex];
    },
}

let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
);

```
- Create using class
```js

```
- Write test by creating two objects also test both methods.

### To test use the following data

You can use the data given below. You will also have to change the name of the function while calling them.

```js
let firstQuestion = new Question(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);
let secondQuestion = new Question(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
);
```
