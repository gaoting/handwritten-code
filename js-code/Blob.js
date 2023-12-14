// Bolb 与 部分读取——slice()
let filesList = document.getElementById("files-list");
filesList.addEventListener("change", (event) => {
  let info = "",
    output = document.getElementById("output"),
    progress = document.getElementById("progress"),
    files = event.target.files,
    reader = new FileReader(),
    blob = blob.slice(files[0], 0, 32);
  if (blob) {
    reader.readAsText(blob);
    reader.onerror = function () {
      output.innerHTML = "error:" + reader.error.code;
    };
    reader.onload = function () {
      output.innerHTML = reader.result;
    };
  } else {
    console.log("no slice()");
  }
});

// 对象url与blob
let filesList2 = document.getElementById("files-list");
filesList.addEventListener("change", (event) => {
  let info = "",
    output = document.getElementById("output"),
    progress = document.getElementById("progress"),
    files = event.target.files,
    reader = new FileReader(),
    url = window.URL.createObjectURL(files[0]);
  if (url) {
    if (/image/.test(files[0].type)) {
      output.innerHTML = `<img src="${url}">`;
    } else {
      output.innerHTML = "not an image";
    }
  } else {
    output.innerHTML = "no url";
  }
});

// 读取拖放文件
let droptarget = document.getElementById("droptarget");
function handleEvent(event) {
  let info = "",
    output = document.getElementById("output"),
    files,
    i,
    len;
  event.preventDefault();
  if (event.type == "drap") {
    files = event.dataTransfer.files;
    i = 0;
    len = files.length;
    while (i < len) {
      info += `${files[i].name} (${files[i].type},${files[i].size} bytes)<br>`;
      i++;
    }
    output.innerHTML = info;
  }
}
droptarget.addEventListener("dragenter",handleEvent)
droptarget.addEventListener("dragover",handleEvent)
droptarget.addEventListener("drop",handleEvent)

