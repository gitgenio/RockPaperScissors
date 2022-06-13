
const optComp = Math.floor( Math.random() * ( 4 - 1 ) ) + 1; 
const contenedorUser = document.querySelector(".containUser");
const contenedorComp = document.querySelector(".containerComp"); 
let img = "";
let img2 = "";
let img3 = "";


switch(optComp){
    case 1 :
    img = "<img class='rockWin' src='./img/stone.jpg'>";
    break;
    case 2 :
    img = "<img class='paperWin' src='./img/paper.jpg'>";
    break;
    case 3 :
    img = "<img class='scissorsWin' src='./img/scissors.webp'>";
    break;
}

let optUser = parseInt(localStorage.keepNum);
switch(optUser){
    case 1 :
    img2 = "<img class='rockWin' src='./img/stone.jpg'>";
    break;
    case 2 :
    img2 = "<img class='paperWin' src='./img/paper.jpg'>";
    break;
    case 3 :
    img2 = "<img class='scissorsWin' src='./img/scissors.webp'>";
    break;
}

let div = document.createElement("div");
div.innerHTML = img2;
contenedorUser.appendChild(div);

let div2 = document.createElement("div");
div2.innerHTML = img;
contenedorComp.appendChild(div2);

 let result = document.getElementById("containerResult");

if(optUser == optComp ){ 
    result.innerHTML = '<img class="result" src="./img/Dead-Heat.webp" alt="deadHeat"> '; 
}else if(optUser == 1 && optComp == 3 || optUser == 2 && optComp == 1 
    || optUser == 3 && optComp == 2 ){
        result.innerHTML = '<img class="result" src="./img/win.png" alt="resultWin"> ';
    }else {
         result.innerHTML = '<img class="result" src="./img/lost2.jpg" alt="resultLost">';
         }