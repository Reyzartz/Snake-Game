//global Variables
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const canvasSide=Math.min(innerHeight,innerWidth);
      canvasSide
const snakeSize=canvasSide/15,
      speed=snakeSize;
canvas.style.backgroundColor="#222"
canvas.width = canvasSide;
canvas.height = canvasSide;

//initialising Variables
let xspeed=speed,
    yspeed=0,
    snakeLen=0,
    isGameOver=false,
    GameStart=true,
    snakeHead={},
    snakebody=[],
    snake=[];
snake[0]=new Snake(0,0);
let food=new Food;

//Changing direction
window.addEventListener('keypress', event => {  
  if(event.key==="w"){
    if(yspeed!==speed){
    xspeed=0;
    yspeed=-speed;
    }
  }
  if(event.key==="a"){
    if(xspeed!==speed){
      xspeed=-speed;
      yspeed=0;
    }
}
  if(event.key==="s"){
    if(yspeed!==-speed){
    xspeed=0;
    yspeed=speed;
    }
}
  if(event.key==="d"){
    if(xspeed!==-speed){
      xspeed=speed;
      yspeed=0;
    }
  }
  if(event.key===" "){
    if(isGameOver){
      xspeed=speed;
      yspeed=0;
      snakeLen=0;
      isGameOver=false;
      snake[0].x=0;
      snake[0].y=0;
      move();
    }
    if(GameStart){
      move();
      GameStart=false
    }
  }
if(event.key!==' ')
  for(let i=0;i<=snakeLen;i++){
        snake[i].x-=xspeed;
        snake[i].y-=yspeed;
  }
  console.log(event);
})

//Changing position of Snake
function updatePOS() {
  snake[0].Xspeed=xspeed;
  snake[0].Yspeed=yspeed;
  snakeHead={
    x:snake[0].x,
    y:snake[0].y
  }
  snake[0].update();
if(snake.length!==1){
    for(let i=1;i<=snakeLen;i++){
      snake[i].Xspeed=xspeed;
      snake[i].Yspeed=yspeed;
      snake[i-1].x=snake[i].x;
      snake[i-1].y=snake[i].y;
      snakebody[i]={
        x:snake[i].x,
        y:snake[i].y
      }
      snake[i].update();
    }
  }
  if(ifTouchBody(snakeHead.x,snakeHead.y)){
    isGameOver=true;
  }
     
}

//comparing position
function ifTouchBody(x,y){
  for(let i=3;i<snakebody.length;i++)
    if(x==snakebody[i].x && y==snakebody[i].y)
    return true
  return false
}
function ifEaten(){
    if(Math.floor(snake[snakeLen].x)==Math.floor(food.x) && Math.floor(snake[snakeLen].y)==Math.floor(food.y)){
        food.update();
        snake.push(new Snake(snake[snakeLen].x,snake[snakeLen].y))
        snakeLen++;
    }
}

//animation
function move(){
    ctx.clearRect(0,0,canvasSide,canvasSide)
    updatePOS();
    food.draw();
    ifEaten();
    updateScore();
    if(!isGameOver)
    requestAnimationFrame(()=>setTimeout(move,200))
    else
    GameOver();
}
startPage()