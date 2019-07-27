function Snake(x,y,color="white"){
    this.x=x
    this.y=y
    this.Xspeed=speed;
    this.Yspeed=0;
    this.draw=function(){ 
        ctx.fillStyle=color;
        ctx.stroke();
        ctx.fillRect(this.x,this.y,snakeSize,snakeSize);
        ctx.stroke(); 
    }
    this.update=function(){
        this.x+=this.Xspeed
        this.y+=this.Yspeed
        if(this.x>=canvasSide+snakeSize || this.x<=-snakeSize || this.y>=canvasSide+snakeSize || this.y<= -snakeSize){
            isGameOver=true
            GameOver()
            console.log("TOuch Edge");
            
        }
            
        this.draw();
    }
}