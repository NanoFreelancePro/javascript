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

/* questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
}); */

btn1.addEventListener("click", () => {
  response1.classList.toggle("show-true-response");
  response1.classList.remove("show-false-response");
  response1.innerText = "VRAI ! La réponse est Berne !";
});
btn2.addEventListener("click", () => {
  response1.classList.toggle("show-false-response");
  response1.classList.remove("show-true-response");
  response1.innerText = "FAUX ! La réponse est BERNE !";
});

//-----------------------------------------------------------------------------------------
//mousemove

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%,-25%)";
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%,-50%)";
});

//on entre ds l'element
questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

// on sort de l'element
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "rgba(0,0,0,1)";
});

response1.addEventListener("mouseover", () => {
  response1.style.transform = "rotate(2deg)";
});

//-----------------------------------------------------------------------------------------
// keypress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

//ajout de son
const ring = () => {
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  /* console.log(e.key); */
  key.innerText = e.key;

  if (e.key === "j") {
    keypressContainer.style.color = "yellow";
  }

  /* ring(); */
});

//-----------------------------------------------------------------------------------------
// SCROLL EVENT

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = "0px";
  } else {
    nav.style.top = "-50px";
  }
});

//Form Event

const inputName = document.querySelector('input[type="text"');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Language préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//-----------------------------------------------------------------------------------------
// Load Event

window.addEventListener("load", () => {
  console.log("Document Chargé !");
});

//-----------------------------------------------------------------------------------------
// FOR EACH

/* const boxes = document.getElementsByClassName("box"); */
const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((boxes) => {
  boxes.addEventListener("click", (e) => {
    console.log(e.target);
  });
});

//-----------------------------------------------------------------------------------------
//    addEventListener VS onclick

document.body.onclick = () => {
  console.log("click!!!");
};

document.body.onclick = () => {
  console.log("scroll !!!");
};

//-----------------------------------------------------------------------------------------
// BOM

//console.log(window.innerHeight);
//console.log(window.screenY);

//window.open("http://google.com", "cours JS", "height=300", "width=400");
//window.close  pour fermer la fenêtre

//Evenement adossés à window
//alert("hello");

//confirm
btn2.addEventListener("click", () => {
  confirm("Etes vous sûr de votre réponse ?");
});
//prompt
btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom !");
  questionContainer.innerHTML += "<h3>Bravo " + answer + " !</h3>";
});

setTimeout(() => {
  questionContainer.style.borderRadius = "50px";
}, 2000);

/* let interval = setInterval(() => {
  document.body.innerHTML += "<div class='box'><h2>Nouvelle BOX !</h2></div>";
}, 10000);

document.body.addEventListener("click", () => {
  clearInterval(interval);
}); */

//location
//console.log(location.href);
//console.log(location.host);
//console.log(location.pathname);
//console.log(location.search);

//location.replace("http://google.com");

/* window.onload = () => {
  location.href = "http://twitter.com";
};
*/

//navigator

//console.log(navigator.userAgent);
/* var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;
  
  console.log("Votre position actuelle est :");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude : ${crd.longitude}`);
  console.log(`La précision est de ${crd.accuracy} mètres.`);
}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options); */

// HISTORY

//console.log(history);
//window.history.back();
//hisory.go(-2)

//-----------------------------------------------------------------------------------------
//SetProperty

window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
