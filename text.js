function startPage(){
    ctx.font=`${snakeSize*1.7}px Arial`
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Snake", canvasSide/2, canvasSide/2); 
    ctx.font=`${snakeSize*.7}px Arial`
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Press Space to start", canvasSide/2, canvasSide*.7); 
  }
  function updateScore(){
    ctx.font=`${snakeSize}px Arial`
    ctx.fillStyle = "yellow";
    ctx.textAlign = "center";
    ctx.fillText(snakeLen, canvasSide-snakeSize, snakeSize); 
  }
  function GameOver(){
    ctx.font=`${snakeSize*1.7}px Arial`
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", canvasSide/2, canvasSide/2); 
    ctx.font=`${snakeSize*.7}px Arial`
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText(`Your Score is  ${snakeLen} press space to Restart`, canvasSide/2, canvasSide*.7);
    xspeed=0;
    yspeed=0;
    isGameOver=true; 
  }