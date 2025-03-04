let contUser = localStorage.keepUserWins;
let contPc = localStorage.keepPcWins;
// containerResult
/* Objetos que representan las opciones del juego (piedra, papel y tijeras) */
const objStone = {
  img: '<a  href="./rpsgamePage2.html"  > <img id="idRock" src="./img/stone/happyStone.png"> </a>',
  num: 1,
};

const objPaper = {
  img: '<a  href="./rpsgamePage2.html" >  <img  id="idPaper" src="./img/paper/happyPaper.png" > </a> ',
  num: 2,
};

const objScissors = {
  img: '<a  href="./rpsgamePage2.html">   <img  id="idScissors"  src="./img/scissors/happyScissors.png" > </a> ',
  num: 3,
};

function start() {
  postImg();
  score();
  rebootScore();
}
// funcíon que coloca las imagenes en el index
function postImg() {
  /* Selección del contenedor donde se insertarán las opciones del juego */
  let contain = document.querySelector(".images");

  /* Creación del elemento para la opción 'Piedra' */
  let divStone = document.createElement("div");
  divStone.classList.add("rock");
  // cuando se hace click almacena el dato en el local storage
  divStone.addEventListener("click", () => changeNumber(objStone.num));
  divStone.innerHTML = objStone.img;
  contain.appendChild(divStone);

  /* Creación del elemento para la opción 'Papel' */
  let divPaper = document.createElement("div");
  divPaper.classList.add("paper");
  divPaper.addEventListener("click", () => changeNumber(objPaper.num));
  divPaper.innerHTML = objPaper.img;
  contain.appendChild(divPaper);

  /* Creación del elemento para la opción 'Tijeras' */
  let divScissors = document.createElement("div");
  divScissors.classList.add("scissors");
  divScissors.addEventListener("click", () => changeNumber(objScissors.num));
  divScissors.innerHTML = objScissors.img;
  contain.appendChild(divScissors);
}
/* Función que almacena el número seleccionado en localStorage */
const changeNumber = (number) => {
  localStorage.keepNum = number;
};

function score() {
  let containScore = document.querySelector(".score");
  // Crea el título "SCORE"
  let scoreTitle = document.createElement("h2");
  scoreTitle.innerHTML = "SCORE";
  containScore.appendChild(scoreTitle);

  // Crear un contenedor flexible para los contadores
  let countersContainer = document.createElement("div");
  // le agrega la clase al div
  countersContainer.classList.add("counters-container");

  // Crear el contador del usuario
  let userCounter = document.createElement("p");
  userCounter.innerHTML = "User: " + contUser;
  countersContainer.appendChild(userCounter);

  // Crear el contador de la PC
  let pcCounter = document.createElement("p");
  pcCounter.innerHTML = "PC: " + contPc;
  countersContainer.appendChild(pcCounter);

  // Agregar el contenedor de contadores al contenedor principal
  containScore.appendChild(countersContainer);
}

function rebootScore() {
  let buttonReboot = document.getElementById("button-reboot");
  buttonReboot.addEventListener("click", () => {
    localStorage.keepUserWins = 0;
    localStorage.keepPcWins = 0;
    location.reload();
  });
}



window.addEventListener("load", start);


