class Promise {  
  constructor(executor) {  
    this.state = 'pending';  
    this.value = null;  
    this.handlers = [];  
  
    const resolve = (v) => {  
      if (this.state === 'pending') {  
        this.state = 'fulfilled';  
        this.value = v;  
        this.handlers.forEach(handler => handler());  
      }  
    };  
  
    const reject = (v) => {  
      if (this.state === 'pending') {  
        this.state = 'rejected';  
        this.value = v;  
        this.handlers.forEach(handler => handler());  
      }  
    };  
  
    executor(resolve, reject);  
  }  
  
  then(onFulfilled, onRejected) {  
    if (this.state === 'pending') {  
      const handler = () => {  
        if (this.state === 'fulfilled') {  
          return onFulfilled(this.value);  
        } else if (this.state === 'rejected') {  
          return onRejected(this.value);  
        }  
      };  
      this.handlers.push(handler);  
    } else if (this.state === 'fulfilled') {  
      setTimeout(onFulfilled, 0, this.value);  
    } else if (this.state === 'rejected') {  
      setTimeout(onRejected, 0, this.value);  
    }  
  }  
}
// 测试一个异步操作  
const testPromise = new Promise((resolve, reject) => {  
  setTimeout(() => {  
    resolve("操作完成"); // 异步操作成功，返回结果  
  }, 1000);  
});  
  
// 使用 then 方法处理结果  
testPromise.then(  
  result => {  
    console.log(result); // 输出：操作完成  
  },  
  error => {  
    console.log(error); // 输出：undefined  
  }  
);