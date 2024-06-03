let health = 100;
let thirst = 100;
let hunger = 100;

setInterval(() => {
  thirst -= 1;
  hunger -= 1;

  updateCounts();
}, 2000);

function updateCounts() {
  document.getElementById("health-count").textContent = health;
  document.getElementById("thirst-count").textContent = thirst;
  document.getElementById("hunger-count").textContent = hunger;

  updateColor("thirst-count", thirst);
  updateColor("hunger-count", hunger);
}

function updateColor(id, value) {
  const element = document.getElementById(id);
  if (value <= 30) {
    element.classList.add("red");
    element.classList.remove("orange", "yellow", "green");
  } else if (value <= 50) {
    element.classList.add("orange");
    element.classList.remove("red", "yellow", "green");
  } else if (value <= 75) {
    element.classList.add("yellow");
    element.classList.remove("red", "orange", "green");
  } else {
    element.classList.add("green");
    element.classList.remove("red", "orange", "yellow");
  }
}