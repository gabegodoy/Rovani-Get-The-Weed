//CARS ATTRIBUTES
var xCars = [600, 600, 600, 600, 600, 600]
var yCars = [75, 190, 295, 415, 520, 630]
var carSpeed = [4, 6, 5, 3, 4, 6]

var policeCar = new Image();
policeCar.src = 'assets/images/policeCar.png';
//function drawCars(){
policeCar.onload = function(){
  for (var i = 0; i < yCars.length; i++){
   context.drawImage(policeCar, xCars[i], yCars[i], 120, 90)
  }
}
//}

function moveCar(){
  for (var i = 0; i < yCars.length; i++)
    xCars[i] -= carSpeed[i];
}

function backToPosition(){
  for (var i = 0; i < yCars.length; i++){  
    if (xCars[i] <= -50){
      xCars[i] = 1000
    }
  }
}