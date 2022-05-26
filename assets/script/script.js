var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');


//ROAD ATTRIBUTES
var roadImage = new Image();
roadImage.src = 'assets/images/road.png';
roadImage.onload = function(){
  context.drawImage(roadImage, 0, 0, 1000, 800)
}

//WEED ATTRIBUTES
var weed = new Image();
weed.src = 'assets/images/weed.png';
weed.onload = function(){
  context.drawImage(weed, 800, 4, 50, 60)
}



function draw(){
  moveCar();
  backToPosition()
}

setInterval(draw, 2);













