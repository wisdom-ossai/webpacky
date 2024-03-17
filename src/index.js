import _ from "lodash";
import "./clearButton";
import style from "./style.scss";

const btn = document.getElementById("click-me");

function onButtonClicked() {
  const el = document.getElementById("header");
  el.innerHTML = "The ui should be updated to this when button is clicked!";
  el.classList.add([style.header]);

  const shopItems = ["Apple", "Banana", "Orange"];
  const ul = document.getElementById("shop-list");
  _.forEach(shopItems, function (item) {
    const li = document.createElement("li");
    li.innerHTML = item;

    ul.appendChild(li);
  });
  ul.classList.add([style.shopList]);
}
btn.addEventListener("click", onButtonClicked);
btn.classList.add([style.btn]);
