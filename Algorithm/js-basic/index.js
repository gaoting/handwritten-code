// 实现栈，有入栈出栈的方法，以及length属性

class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length-1];
  }
  isEmpty() {
    return this.items.length === 0
  }
  get length() {
    return this.items.length;
  }
}


const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.length);    // 3
console.log(myStack.peek());    // 3
console.log(myStack.pop());     // 3
console.log(myStack.pop());     // 2
console.log(myStack.length);    // 1
console.log(myStack.isEmpty());