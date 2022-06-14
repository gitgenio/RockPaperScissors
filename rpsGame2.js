let optUser = parseInt(localStorage.keepNum);
const optComp = Math.floor( Math.random() * ( 4 - 1 ) ) + 1; 
const contenedorUser = document.querySelector(".containUser");
const contenedorComp = document.querySelector(".containerComp"); 
let img = "";
let img2 = "";

function res(option, image, contain){
switch(option){
    case 1 :
        image = "<img class='rockWin' src='./img/stone.jpg'>";
    break;
    case 2 :
        image = "<img class='paperWin' src='./img/paper.jpg'>";
    break;
    case 3 :
        image = "<img class='scissorsWin' src='./img/scissors.webp'>";
    break;
}

let div = document.createElement("div");
div.innerHTML = image;
contain.appendChild(div);

}
res(optUser, img, contenedorUser);
res(optComp, img2, contenedorComp);

 let result = document.getElementById("containerResult");

if(optUser == optComp ){ 
    result.innerHTML = '<img class="result" src="./img/Dead-Heat.webp" alt="deadHeat"> '; 
}else if(optUser == 1 && optComp == 3 || optUser == 2 && optComp == 1 
    || optUser == 3 && optComp == 2 ){
        result.innerHTML = '<img class="result" src="./img/win.png" alt="resultWin"> ';
    }else {
         result.innerHTML = '<img class="result" src="./img/lost2.jpg" alt="resultLost">';
         }