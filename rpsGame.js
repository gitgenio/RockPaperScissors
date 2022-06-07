window.onload = begin;
var rps = "";

 
function begin(){ 
let rock = document.querySelector(".stone");
rock.addEventListener("click", funcRock);
let paper = document.querySelector(".paper");
// var paper = document.getElementById("idPaper");
paper.addEventListener("click", funcPaper);
let scissors = document.querySelector(".scissors");
scissors.addEventListener("click", funcScissors);
}

function funcRock(){
   rps = "stone";  
//    alert("itssss optcomp: " +optComp);     
}
function funcPaper(){
   rps = "paper"; 
   console.log(rps); 
}
function funcScissors(){
   rps = "scissors";  
   console.log(rps);
   //alert(rps);     
}
//onsole.log(rps);
