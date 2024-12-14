function handleButtonClick(event) {
  let buttonKey = event.target.innerHTML;
  playSound(buttonKey);
  addAnimation(buttonKey);
}

const drumButtons =  document.querySelectorAll(".drum");

drumButtons.forEach(function(drumButton) {
   drumButton.addEventListener("click", handleButtonClick);
});

document.addEventListener("keydown", function(event) {
  playSound(event.key); 
});

function playSound(key) {

  switch (key) {
    case "w":
      new Audio("sounds/crash.mp3").play();
      break;
    case "a":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "s":
      new Audio("sounds/snare.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "j":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "k":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "l":
      new Audio("sounds/tom-4.mp3").play();
      break;
    default:
      console.log("U've pressed" + key);
  }
};
      function addAnimation(key) {
  var activeButton = document.querySelector("."+ key);
  activeButton.classList.add("pressed");
  setTimeout(function (){
    activeButton.classList.remove("pressed");
  }, 100);
}