
const optComp = Math.floor( Math.random() * ( 4 - 1 ) ) + 1; 
const contenedor = document.querySelector(".container");
const contenedor2 = document.querySelector(".container2"); 
alert(" localStorage.keepNum2:  "+ localStorage.keepNum);

switch(optComp){
    case 1 :
    img = "<img class='imgRock' src='./img/stone.jpg'>";
    break;
    case 2 :
    img = "<img class='imgPaper' src='./img/paper.jpg'>";
    break;
    case 3 :
    img = "<img class='imgScissors' src='./img/scissors.webp'>";
    break;
}
switch(optUser){
    case 1 :
    img2 = "<img class='imgRock' src='./img/stone.jpg'>";
    break;
    case 2 :
    img2 = "<img class='imgPaper' src='./img/paper.jpg'>";
    break;
    case 3 :
    img2 = "<img class='imgScissors' src='./img/scissors.webp'>";
    break;
}

img2 = "<img class='imgScissors' src='./img/scissors.webp'>";
let div = document.createElement("div");
div.innerHTML = img2;
contenedor.appendChild(div);

let div2 = document.createElement("div");
div2.innerHTML = img;
contenedor2.appendChild(div2);

