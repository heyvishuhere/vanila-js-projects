const value = document.getElementById("showCountdown");
const start = document.getElementById("startBtn");

let num = 10;
const colors = [
  "#e8e8e4",
  "#faa307",
  "#4361ee",
  "#dddf00",
  "#e5b3fe",
  "#da1e37",
  "#dbcdf0",
  "#14746f",
  "#0077b6",
  "#ffe97f",
];

start.addEventListener("click", () => {
  start.style.display = "none";
  value.style.display = "block";

  let interval = setInterval(displayCounter, 1000);

  function displayCounter() {
    num--;
    if (num === 0) {
      value.innerHTML = "Go";
      clearInterval(interval);
    } else {
      value.innerHTML = num;
    }
    value.style.color = `${colors[num]}`;
  }
});
