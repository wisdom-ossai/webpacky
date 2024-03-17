import style from "./clearButton.css";
const btn = document.createElement("button");
btn.innerHTML = "Clear";
btn.classList.add([style.btn]);
btn.onclick = function () {
  alert("Clear Button Clicked");
};

document.body.appendChild(btn);
