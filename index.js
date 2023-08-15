var randomNumber1=Math.floor(Math.random() *6)+1;
var diceImage1= "images/dice"+ randomNumber1+".png";
document.querySelectorAll(".img1")[0].setAttribute("src", diceImage1)

var randomNumber2=Math.floor(Math.random() *6)+1;
var diceImage2= "images/dice"+ randomNumber2+".png";

document.querySelectorAll(".img2")[0].setAttribute("src",diceImage2);


document.querySelector("h1").innerHTML=winner()
function winner(){
    if (randomNumber1> randomNumber2){return("Player 1 wins")}
    else if (randomNumber2>randomNumber1){return("Player 2 wins")}
    else if (randomNumber1===randomNumber2) {return("It's a draw")}
}
