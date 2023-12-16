// 数据结构 Map
class MyMap {
  constructor(iterator = []) {
    if (typeof iterator[Symbol.iterator] !== "function") {
      throw new Error("不可迭代");
    }
    this.items = {};
    this.size = 0;
    for (const item of iterator) {
      if (typeof item[Symbol.iterator] !== "function") {
        throw new Error("不可迭代");
      }
      const iteratorItem = item[Symbol.iterator]();
      const key = iteratorItem.next().value;
      const value = iteratorItem.next().value;
      this.set(key, value);
    }
  }
  set(key, value) {
    if (!this.items.hasOwnProperty(key)) {
      this.size++;
    }
    this.items[key] = value;
    return this;
  }

  get(key) {
    if (this.items.hasOwnProperty(key)) {
      return this.items[key];
    } else {
      return undefined;
    }
  }

  delete(key) {
    if (this.items.hasOwnProperty(key)) {
      delete this.items[key];
      this.size--;
      return true;
    } else {
      return false;
    }
  }

  clear() {
    this.item = {};
    this.size = 0;
  }

  keys() {
    let keys = [];
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(this.items[key]);
      }
    }
    return values;
  }

  entries() {
    let entries = [];
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        entries.push([key, this.items[key]]);
      }
    }
    return entries;
  }

  *[Symbol.iterator]() {
    for (const key in this.items) {
      yield [this.items[key], key];
    }
  }

  forEach(callBacnFn, thisArgs = this) {
    for (const key in this.items) {
      callBacnFn.call(thisArgs, this.items[key], key, this.items);
    }
  }
}

let myMap = new MyMap()
