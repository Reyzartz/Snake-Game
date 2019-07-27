function randomNum(){
    return Math.floor(Math.random()*(canvasSide/snakeSize))*snakeSize
}
function Food(){
    this.x=randomNum()
    this.y=randomNum()    
this.draw=function(){ 
    ctx.fillStyle="red"
    if(ifTouchBody(this.x,this.y))
    this.update();
    ctx.fillRect(this.x,this.y,snakeSize,snakeSize);   
}
this.update=function(){
    this.x=randomNum()
    this.y=randomNum()
    this.draw();
}
}