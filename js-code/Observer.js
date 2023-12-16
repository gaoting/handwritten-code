class Observer {
  constructor(cb) {
    if (typeof cb === "function") {
      this.cb = cb;
    } else {
      throw new Error("Observer构造器函数必须传入函数类型");
    }
  }
  update() {
    this.cb();
  }
}

class Subject {
  constructor() {
    this.Observers = [];
  }
  add(observer) {
    this.observers.push(observer);
  }
  remove(observer) {
    this.observers.forEach((item, i) => {
      if (item === observer) {
        this.observers.splice(i, 1);
      }
    });
  }

  notify() {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }
}

const observerCallback = function () {
  console.log("通知到了");
};

const observer = new Observer(observerCallback);
const subject = new Subject();
subject.add(observer);
subject.notify();
