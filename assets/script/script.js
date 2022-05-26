var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');




//ROAD ATTRIBUTES
function drawRoad(){
  var roadImage = new Image();
  roadImage.src = 'assets/images/road.png';
  roadImage.onload = function(){
    context.drawImage(roadImage, 0, 0, 1000, 800)
  }
}
//WEED ATTRIBUTES
function drawWeed(){
  var weed = new Image();
  weed.src = 'assets/images/weed.png';
  weed.onload = function(){
    context.drawImage(weed, 800, 4, 50, 60)
}
}

function clearScreen(){
  context.clearRect(0, 0, 1000, 800);
}

function draw (){
 // clearScreen()
  drawRoad();
  drawCars();
  drawChar();
  drawWeed();

  moveCar();
  backToPosition();
  checkColision();

  makeScore();
  showScore();

}

setInterval(draw, 20);
















