let optUser = parseInt(localStorage.keepNum);
const optComp = Math.floor( Math.random() * ( 4 - 1 ) ) + 1; 
const contenedorUser = document.querySelector(".containUser");
const contenedorComp = document.querySelector(".containerComp"); 
let userBool = false;
let compBool = false;

function res(option,  contain, bool){
    switch(option){
    case 1 :
        if(bool)
        image = "<img class='rockWin' src='./img/happyStone.jpg'>";
        else
        image = "<img class='rockWin' src='./img/sadStone.jpg'>";
    break;
    case 2 :
        if(bool)    
        image = "<img class='paperWin' src='./img/happyPaper.jpg'>";
        else
        image = "<img class='paperWin' src='./img/sadPaper.webp'>";
    break;
    case 3 :   
        if(bool)    
        image = "<img class='scissorsWin' src='./img/happyScissors.jpg'>";
        else
        image = "<img class='scissorsWin' src='./img/sadScissors.jpg'>";
    break;
    }

let div = document.createElement("div");
div.innerHTML = image;
contain.appendChild(div);
}

 let result = document.getElementById("containerResult");

 if(optUser == optComp ){ 
    result.innerHTML = '<img class="result" src="./img/Dead-Heat.webp" alt="deadHeat"> '; 
}else if(optUser == 1 && optComp == 3 || optUser == 2 && optComp == 1 
    || optUser == 3 && optComp == 2 ){
        userBool = true;
        result.innerHTML = '<img class="result" src="./img/win.png" alt="resultWin"> ';
    }else {
        compBool  = true;
         result.innerHTML = '<img class="result" src="./img/lost2.jpg" alt="resultLost">';
         }

res(optUser,  contenedorUser, userBool);
res(optComp,  contenedorComp, compBool);
