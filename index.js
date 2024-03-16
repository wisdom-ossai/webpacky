import _ from "lodash";

function onButtonClicked() {
  const el = document.getElementById("header");
  el.innerHTML = "The ui should be updated to this when button is clicked!";

  const shopItems = ["Apple", "Banana", "Orange"];
  const ul = document.getElementById("shop-list");
  _.forEach(shopItems, function (item) {
    const li = document.createElement("li");
    li.innerHTML = item;

    ul.appendChild(li);
  });
}
document.getElementById("click-me").addEventListener("click", onButtonClicked);
