//ROVANI ATTRIBUTES
var xRovani = 200;
var yRovani = 732;
var rovaniSpeed = 10;
var rovani = new Image();
rovani.src = 'assets/images/rovani.png';
function drawChar(xRovani, yRovani){
  rovani.onload = function(){
    context.drawImage(rovani, xRovani, yRovani, 50, 60)
  }
}
//KEYBOARD
var left = 37;
var up = 38;
var right = 39;
var down = 40;


function moveChar(event){
  if (event.keyCode == left ){
    xRovani -= rovaniSpeed    
    console.log('work')
  }
  else if (event.keyCode == right){
    xRovani += rovaniSpeed
  }
  else if (event.keyCode == up){
    yRovani -= rovaniSpeed
  }
  else if (event.keyCode == down){
    yRovani += rovaniSpeed
  }
}

document.onkeydown = moveChar;
