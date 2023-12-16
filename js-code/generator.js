//  demo1
let range = {
  form: 1,
  to: 5,

  [Symbol.iterator]() {
    return {
      current: this.form,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

console.log([...range]);

// demo2
const arr = [1, 2, 3];
arr[Symbol.iterator] = function () {
  let i = 0;
  return {
    next() {
      if (i >= arr.length) {
        return { value: undefined, done: true };
      }
      return { value: arr[i++], done: false };
    },
  };
};

//  实现
const myIterable = {
  data: [1, 2, 3, 4, 5],
  index: 0,
  [Symbol.iterator]: function () {
    const _this = this;
    let currentIndex = 0;

    return {
      next: function () {
        if (currentIndex < _this.data.length) {
          return { value: _this.data[currentIndex++] * 2, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

for(const value of myIterable){
  console.log(value)
}


