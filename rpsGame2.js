window.onload = begin;

function begin(){ 
    let rock = document.querySelector(".stone");
    rock.addEventListener("click", funcRock);
    let paper = document.querySelector(".paper");
    // var paper = document.getElementById("idPaper");
    paper.addEventListener("click", funcPaper);
    let scissors = document.querySelector(".scissors");
    scissors.addEventListener("click", funcScissors);
    }
 img2 = "<img class='imgRock' src='./img/stone.jpg'>";   
    function funcRock(){
     img2 = "<img class='imgRock' src='./img/stone.jpg'>";   
     }




const optComp = Math.floor( Math.random() * ( 4 - 1 ) ) + 1; 
const contenedor = document.querySelector(".container");
const contenedor2 = document.querySelector(".container2");

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

let div = document.createElement("div");
div.innerHTML = img2;
contenedor.appendChild(div);

let div2 = document.createElement("div");
div2.innerHTML = img;
contenedor2.appendChild(div2);
