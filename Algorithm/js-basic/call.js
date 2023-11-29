// 改变上下文
function myFun(age) {
  return "我的姓名是" + this.name + "我的年龄" + age;
}

const obj = {
  name: "Luna",
  age: 28,
  callback: myFun,
};

myFun.call(obj, 18);
myFun.apply(obj, [18]);
myFun.bind(obj, 18)();
