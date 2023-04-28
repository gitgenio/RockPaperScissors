
const changeNumber = (number) => {  
   localStorage.keepNum = number; 
}

 const objStone = {
   img : '<a href="./rpsgamePage2.html"  > <img src="./img/happyStone.jpg"> </a>',
   num :1,
 };
 const objPaper = {
   img : '<a class="paper" href="./rpsgamePage2.html" >  <img  id="idPaper" src="./img/happyPaper.jpg" > </a> ',
   num :2,
 };
 const objScissors = {
   img : '<a class="scissors" href="./rpsgamePage2.html">   <img  id="idScissors"  src="./img/happyScissors.jpg" > </a> ',
   num :3,
 };


   let contain = document.querySelector(".images");

   let divStone = document.createElement("div");
   // la función toma el dato cuando le hacen click
   divStone.addEventListener("click", () => changeNumber(objStone.num));
   // No sirve,  la función toma el dato de la ultima vez que se ejecuta
   // divStone.addEventListener("click", changeNumber(objStone.num));   
   divStone.innerHTML = objStone.img;
   contain.appendChild(divStone);

   let divPaper = document.createElement("div");
   divPaper.addEventListener("click", () => changeNumber(objPaper.num));
   divPaper.innerHTML = objPaper.img;
   contain.appendChild(divPaper);

   let divScissors = document.createElement("div");
   divScissors.addEventListener("click", () => changeNumber(objScissors.num));
   divScissors.innerHTML = objScissors.img;
   contain.appendChild(divScissors);

   