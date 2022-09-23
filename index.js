const count = document.querySelector(".count-section");
const btn = document.getElementById("button-section");
const addBtn = btn.lastElementChild;
const subtractBtn = btn.firstElementChild;

addBtn.addEventListener("click", function () {
  if (count.innerHTML == "Count") {
    count.innerHTML = 1;
  } else {
    count.innerHTML = parseInt(count.innerHTML, 10) + 1;
  }
});

subtractBtn.addEventListener("click", function () {
  if (parseInt(count.innerHTML, 10) <= 1) {
    count.innerHTML = "Count";
  } else if (parseInt(count.innerHTML, 10) > 1) {
    count.innerHTML = parseInt(count.innerHTML, 10) - 1;
  }
});

// Add key events
window.addEventListener("keydown", (e) => {
  if (e.key === "+") {
    if (count.innerHTML == "Count") {
      count.innerHTML = 1;
    } else {
      count.innerHTML = parseInt(count.innerHTML, 10) + 1;
    }
  } else if (e.key === "-") {
    if (parseInt(count.innerHTML, 10) <= 1) {
      count.innerHTML = "Count";
    } else if (parseInt(count.innerHTML, 10) > 1) {
      count.innerHTML = parseInt(count.innerHTML, 10) - 1;
    }
  }
});
