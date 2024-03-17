function returnReverse(str) {
  const val = str.toString().split("").reverse().join("");
  return typeof str === "number" ? parseInt(val) : val;
}

console.log(returnReverse("codingjob"));
console.log(returnReverse(-15));
