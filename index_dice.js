var name1 = prompt("Enter the First Player Name");
var name2 = prompt("Enter the Second Player Name");

var randomnumber1 = Math.random();
randomnumber1 = Math.floor(randomnumber1*6) + 1 ;
document.querySelectorAll("img")[0].setAttribute("src","dice"+randomnumber1+".png");


var randomnumber2 = Math.random();
randomnumber2 = Math.floor(randomnumber2*6) + 1;
document.querySelectorAll("img")[1].setAttribute("src","dice"+randomnumber2+".png");



if(randomnumber1==randomnumber2){

document.querySelector("h3").innerHTML="Oo Shit !  MATCH DRAW";
}

else if(randomnumber1 > randomnumber2){
  document.querySelector("h3").innerHTML="Congo! "+name1 + " You Have Won This Match";

}

else{
  document.querySelector("h3").innerHTML="Congo! " + name2+ " You Have Won This Match";
}
