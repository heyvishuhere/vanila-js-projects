let count = 0;

const value = document.getElementById("number");
const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase-number")) {
      count++;
    } else if (styles.contains("decrease-number")) {
      count--;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "#222";
    }

    value.textContent = count;
  });
});
