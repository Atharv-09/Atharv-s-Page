
var no_of_button = document.querySelectorAll(".drum").length


//detecting buttonpress
for(var i=0 ; i<no_of_button ; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

function handleClick(){
  var buttonInnerHtml = this.innerHTML;

  makesound(buttonInnerHtml);

  buttonanimation(buttonInnerHtml);
  }
//  this.style.color="white"; // trigger the button on which we are





// detecting keypresss
document.addEventListener("keypress",function(event){ //herre event work as we
  makesound(event.key);

  buttonanimation(event.key);
});


function makesound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio('tom-1.mp3');
      tom1.play();
    break;
    case "a":
      var tom2 = new Audio('tom-2.mp3');
      tom2.play();
    break;
    case "s":
      var crash = new Audio('crash.mp3');
      crash.play();
    break;
    case "d":
      var kick = new Audio('kick-bass.mp3');
      kick.play();
    break;
    case "j":
      var snare = new Audio('snare.mp3');
      snare.play();
    break;
    case "k":
      var tom3 = new Audio('tom-3.mp3');
      tom3.play();
    break;
    case "l":
      var tom4 = new Audio('tom-4.mp3');
      tom4.play();
    break;

    default:console.log();

}


}

function buttonanimation(currentkey){
var activebutton =  document.querySelector("."+currentkey) ; // . + w --> goes into w class and do work

  activebutton.classList.add("pressed");

  setTimeout(function(){ activebutton.classList.remove("pressed")},100); //setTimeout(function,time);
}



















//to get click onscreen
//why we not give parenthsis during function call>?
//beacuse when we procees line by through code first as theclick event is happening it first call functioon then events happend
//so overcome click event happen first we wrote like this
//or
// document.querySelectorAll("button")[i].addEventListener("click",function(){
//   alert("I Got Clicked.");
// }); //to get click onscreen
