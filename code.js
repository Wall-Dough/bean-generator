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

function getRotatedMojis(m, n) {
  var mojes = "";
  for (var j = 0; j < n; j++) {
    for (var i = 0; i < m; i++) {
      mojes += getMoj(i, j);
    }
    mojes += "\n";
  }
  return mojes;
}

function getBean() {
  return getMojis(11, 8);
}

function getRotatedBean() {
  return getRotatedMojis(11, 8);
}

window.onload = function () {
  var textarea = document.createElement("textarea");
  textarea.readonly = true;
  textarea.innerHTML = getBean();
  textarea.setAttribute("cols", "50");
  textarea.setAttribute("rows", "25");
  document.body.appendChild(textarea);
}
