// 1. Create a class name `Stack` with the following data and methods. Also implement a `length` getter method.

// Data:

// - `stack`

// Methods:

// - `push`: will accept a value and add to the stack. Stack adds data at the end
// - `pop`: will delete the last element (max index) of the stack
// - `peek`: can accept and optional parameter. Will display the element at the given index(passed as argument). If nothing is passed display the last element (last index)
// - `reverse`: will reverse all the elements of the stack and return the reversed stack
// - `isEmpty`: returns `true` if the stack is empty and `false` if the stack has any data.
// - `displayStack`: returns all the data in stack in string format

// Getter

// - `length`: returns the current length of the stack.

class Stack {
    constructor() {
        this.stack = [];
    }
    push(value) {
        this.stack[this.stack.length] = value;
    }
    pop() {
        this.splice([this.stack.length - 1], 1);
    }
    peek(optional) {
        if(optional) return this.stack[optional];
        return this.stack[this.stack.length - 1];
    }
    reverse() {
        for(let i = 0; i < this.length / 2; i++) {
            [this.stack[i], this.stack[this.stack.length - 1 - i]] = [this.stack[this.stack.length - 1 - i], this.stack[i]]; 
        }
        return this;
    }
    isEmpty() {
        if(this.stack) return true;
        return false;
    }
    displayStack() {
        return JSON.stringify(this.stack);
    }
    get length() {
        let i = 0;
        while(this.stack[i] !== undefined) {
            i++;
        }
        return i;
    }
}

// Create a class name `Queue` with the following data and methods. Also implement a `length` getter method.

// Data:

// - `queue`

// Methods:

// - `enqueue`(item): Adds the item at the end of the queue
// - `dequeue`: Removes an item from the top of the queue
// - `peek`: can accept and optional parameter. Will display the element at the given index(passed as argument). If nothing is passed display the first element from top (index 0)
// - `isEmpty`: returns `true` if the stack is empty and `false` if the stack has any data.
// - `displayQueue`: returns all the data in stack in string format

// Getter

// - `length`: returns the current length of the stack.

class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(value) {
        this.queue[this.queue.length] = value;
    }
    dequeue() {
        this.splice([this.queue.length - 1], 1);
    }
    peek(optional) {
        if(optional) return this.queue[optional];
        return this.queue[this.queue.length - 1];
    }
    isEmpty() {
        if(this.queue) return true;
        return false;
    }
    displayQueue() {
        return JSON.stringify(this.queue);
    }
    get length() {
        let i = 0;
        while(this.queue[i] !== undefined) {
            i++;
        }
        return i;
    }
}