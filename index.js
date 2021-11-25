/* CALCULETTE */
let total = 0;

function plus(x) {
  total += x;
  return total;
}

function moins(x) {
  total -= x;
  return total;
}

function diviser(x) {
  if (total === 0) {
    return (total = x);
  } else {
    total /= x;
    return total;
  }
}

function fois(x) {
  if (total === 0) {
    return (total = x);
  } else {
    total *= x;
    return total;
  }
}

function reset() {
  total = 0;
}

/* QUIZZZZZ */

/* document.querySelector("h4").style.background = "yellow"; */

/* const baliseHTML = document.querySelector("h4");
console.log(baliseHTML);
baliseHTML.style.background = "yellow"; */

// Click event

const questionContainer = document.querySelector(".click-event");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const response1 = document.getElementById("response-1");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response1.classList.toggle("show-true-response");
  response1.innerText = "VRAI ! La réponse est Berne !";
});
btn2.addEventListener("click", () => {
  response1.classList.toggle("show-false-response");
  response1.innerText = "FAUX ! La réponse est BERNE !";
});
