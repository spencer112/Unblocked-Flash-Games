// Slider Variables
let redSlider;
let greenSlider;
let blueSlider;
// Page Theme
let r = 0;
let g = 0;
let b = 0;
// Page Variables
let body;
let elements;
let gameContainer;
let title;
let lastGame;
let overLapped;
// Game variables
let tetris = "flash-tetris.swf";
let poker = "texas-holdem.swf";
let doom = "doom.swf";
let btd5 = "btd5.swf";
let isaac = "isaac.swf";
let happyWheels = "happyWheels.swf";
let strikeForce2 = "SFH2.swf";

function changeGame(game){
  
  // Checking to see if the game is currently playing
  if(game == lastGame){
    return;
  }
  
  let currentGame = document.getElementById("game");
  let newGame;
  
  if(currentGame !== null){
    currentGame.remove();
  }
  
  newGame = document.createElement("embed");
  
  
  newGame.setAttribute("id", "game");
  newGame.setAttribute("src", game);
  
  if(game == tetris){
    newGame.setAttribute("height", "700px");
    newGame.setAttribute("width", "800px");
    newGame.style.left = "25%";
    title.innerHTML = "Tetris";
  }
  else if(game == poker){
    newGame.setAttribute("height", "430px");
    newGame.setAttribute("width", "640px");
    newGame.style.left = "30%";
    title.innerHTML = "Poker";
  }
  else if(game == doom){
    newGame.setAttribute("height", "418px");
    newGame.setAttribute("width", "670px");
    newGame.style.left = "29%";
    title.innerHTML = "Doom";
  }
  else if(game == btd5){
    newGame.setAttribute("height", "700px");
    newGame.setAttribute("width", "800px");
    newGame.style.left = "25%";
    title.innerHTML = "Bloons Tower Defence 5";
  }
  else if(game == isaac){
    newGame.setAttribute("height", "700px");
    newGame.setAttribute("width", "800px");
    newGame.style.left = "25%";
    title.innerHTML = "The Binding Of Isaac (Demo)";
  }
   else if(game == happyWheels){
    newGame.setAttribute("height", "700px");
    newGame.setAttribute("width", "800px");
    newGame.style.left = "25%";
    title.innerHTML = "Happy Wheels";
  }
  else if(game == strikeForce2){
    newGame.setAttribute("height", "650px");
    newGame.setAttribute("width", "800px");
    newGame.style.left = "25%";
    title.innerHTML = "Strike Force Heros 2";
  }
  
  gameContainer.appendChild(newGame);
  
  lastGame = game;
}

function updateTheme(){
  r = redSlider.value;
  g = greenSlider.value;
  b = blueSlider.value;
  
  newTheme = "rgb(" + r + ", " + g + ", " + b + ")";
  
  var i;
  
  for(i = 0; i < elements.length; i++){
    elements[i].style.backgroundColor = newTheme;
  }
  changeForeground();
}

function randomTheme(){
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  
  newTheme = "rgb(" + r + ", " + g + ", " + b + ")";
  
  var i;
  
  for(i = 0; i < elements.length; i++){
    elements[i].style.backgroundColor = newTheme;
  }
  
  redSlider.value = r;
  greenSlider.value = g;
  blueSlider.value = b;
  
  changeForeground();
}

function changeForeground(){
  let newColor;
  
  
  if(r >= 140 && g >= 180){
    newColor = "black";
  }
  
  else if(r >= 120 && g >= 160 && b >= 160){
    newColor = "black";
  }
  
  else{
    newColor = "white";
  }
  
  for(i = 0; i < elements.length; i++){
    elements[i].style.color = newColor;
  }
}

window.onload = function(){
  redSlider = document.getElementById("redSlider");
  greenSlider = document.getElementById("greenSlider");
  blueSlider = document.getElementById("blueSlider");
  body = document.getElementById("body");
  gameContainer = document.getElementById("Game");
  title = document.getElementById("title");
  elements = document.querySelectorAll("body, h1, h3, button");
};




// 1460 Stuff look bad

// > 1460 We good
