class Roof{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true,restitution:0.1});
        World.add(world,this.body);
    }
    display(){
        push()
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
        pop()
    }
}