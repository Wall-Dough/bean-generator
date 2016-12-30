function getMoj(i, j) {
  return ":" + i.toString() + "-" + j.toString() + ":";
}

function getMojis(m, n) {
  var mojes = "";
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      mojes += getMoj(i, j);
    }
    mojes += "\n";
  }
  return mojes;
}

function getBean() {
  return getMojis(9, 7);
}

window.onload = function () {
  var textarea = document.createElement("textarea");
  textarea.readonly = true;
  textarea.innerHTML = getBean();
  document.body.appendChild(textarea);
}
