let filesList = document.getElementById("files-list");

filesList.addEventListener("change", (event) => {
  let info = "",
    output = document.getElementById("output"),
    progress = document.getElementById("progress"),
    type = "default",
    reader = new FileReader();

  if (/image/.test(files[0].type)) {
    reader.readAsDataURL(files[0]);
    type = "image";
  } else {
    reader.readAsText(files[0]);
    type = "text";
  }

  reader.onerror = function () {
    output.innerHTML = "error: " + reader.error.code;
  };

  reader.onprogress = function (event) {
    if (event.lengthComputable) {
      progress.innerHTML = `${event.loaded}/${event.total}`;
    }
  };

  reader.onload = function () {
    let html = "";
    switch (type) {
      case "image":
        html = `<img src="${reader.result}">`;
        break;
      case "text":
        html = reader.result;
        break;
    }
    output.innerHTML = html;
  };
});
