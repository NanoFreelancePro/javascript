const counterDisplay = document.querySelector("h3");
let counter = 0;
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  counterDisplay.innerText = 0;
  counter = 0;
});

function bubbleMaker() {
  const bubble = document.createElement("span");

  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const random = Math.random() * 200 + 100;
  const size = Math.round(random) + "px";

  bubble.style.width = size;
  bubble.style.height = size;
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.setProperty("--left", Math.random() * 100 + "%");

  bubble.addEventListener("click", () => {
    bubble.remove();
    counter++;
    counterDisplay.innerText = counter;
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
}
setInterval(bubbleMaker, 500);
