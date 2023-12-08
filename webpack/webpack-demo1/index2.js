var { SyncHook } = require("tapable");
var hook2 = new SyncHook(["str"]);

hook2.tap("tap1", function (arg1) {
  console.log(arg1 + 1);
});

hook2.tap("tap2", function (arg) {
  console.log(arg + 2);
});

hook2.call("params ");
