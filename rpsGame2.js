
// Se inicializan userWins y pcWins con los valores almacenados en localStorage, si existen.
let userWins = localStorage.keepUserWins ? parseInt(localStorage.keepUserWins) : 0;
let pcWins = localStorage.keepPcWins ? parseInt(localStorage.keepPcWins) : 0;
// Recupera la opción seleccionada por el usuario desde localStorage y la convierte en número 
let optUser = parseInt(localStorage.keepNum);

// Elementos HTML donde se mostrará el puntaje
const userScoreElement = document.getElementById("userScore");
const pcScoreElement = document.getElementById("pcScore");

// Función para actualizar los puntajes en localStorage y en pantalla
const updateScores = () => {
    localStorage.keepUserWins = userWins;
    localStorage.keepPcWins = pcWins;
    userScoreElement.textContent = userWins;
    pcScoreElement.textContent = pcWins;
  };

/* Genera una opción aleatoria para la computadora (1 a 3) */
const optComp = Math.floor(Math.random() * (4 - 1)) + 1;

/* Selecciona los contenedores donde se mostrarán las elecciones del usuario y la computadora */
const contenedorUser = document.querySelector(".containUser");
const contenedorComp = document.querySelector(".containerComp");

let userBool = false;
let compBool = false;

/* Función que muestra la imagen correspondiente según la elección y el resultado */
function res(option, contain, bool) {
  let image;
  switch (option) {
    case 1:
      image = bool
        ? "<img class='rockWin' src='./img/stone/happyStone.png'>"
        : "<img class='rockWin' src='./img/stone/sadStone.png'>";
      break;
    case 2:
      image = bool
        ? "<img class='paperWin' src='./img/paper/happyPaper.png'>"
        : "<img class='paperWin' src='./img/paper/sadPaper.png'>";
      break;
    case 3:
      image = bool
        ? "<img class='scissorsWin' src='./img/scissors/happyScissors.png'>"
        : "<img class='scissorsWin' src='./img/scissors/sadScissors.png'>";
      break;
  }

  /* Crea un nuevo div y agrega la imagen correspondiente */
  let div = document.createElement("div");
  div.innerHTML = image;
  contain.appendChild(div);
}

/* Selecciona el contenedor donde se mostrará el resultado */
let result = document.getElementById("containerResult");

/* Lógica para determinar el resultado del juego */
if (optUser == optComp) {
  result.innerHTML =
    '<img class="result" src="./img/Dead-Heat.webp" alt="deadHeat">';
} else if (
  (optUser == 1 && optComp == 3) ||
  (optUser == 2 && optComp == 1) ||
  (optUser == 3 && optComp == 2)
) {
  userBool = true;
  userWins += 1; // Usuario gana una ronda 
  result.innerHTML =
    '<img class="result" src="./img/win.png" alt="resultWin">';    
} else {
  compBool = true;
  pcWins += 1; // PC gana una ronda 
  result.innerHTML =
    '<img class="result" src="./img/lost2.jpg" alt="resultLost">';  
}

/* Llamada a la función para mostrar las imágenes correspondientes */
res(optUser, contenedorUser, userBool);
res(optComp, contenedorComp, compBool);

// Actualizar puntajes después de cada ronda
updateScores();




