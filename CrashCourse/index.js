const dec = document.getElementById("dec");
const reset = document.getElementById("reset");
const inc = document.getElementById("increase");

const countLabel = document.getElementById("countLabel");
let count = 0;

inc.onclick = function () {
  count++;
  countLabel.textContent = count;
};

dec.onclick = function () {
  count--;
  countLabel.textContent = count;
};

reset.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
