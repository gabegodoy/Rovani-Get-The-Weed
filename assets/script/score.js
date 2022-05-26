//SCORE ATTRIBUTES
var score = 0;

/*  function showScore(){
  context.font = "100px"  
  context.textAlign = "center"
  context.fillStyle = 'Green'
  context.fillText(score + ' Joints', canvas.width/2, 100)
}  */

function makeScore(){
  if (yRovani <= 20 && xRovani >= 780){
    //points.play();
    score++
    xRovani = 200;
    yRovani = 732;
  }
}





function checkColision(){
  for (var i = 0; i < yCars.length; i++){
    for (var count = 0; count <= actorHeight; count++){ 
      for (var c = 0; c <= actorHeight; c++){
        for (var counter = 0; counter <= actorWidth; counter++){
          if (xCars[i] == xRovani + counter
              && yCars[i] + count == yRovani + c){
          // points.play();
            score--
            xRovani = 200;
            yRovani = 732;

          }
        }
      }
    }
  }
}

