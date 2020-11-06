  
class Rope{
    constructor(bodyA,bodyB,xOffset,yOffset){
        this.offSetX = xOffset;
        this.offSetY = yOffset;
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            PointB:{x:this.offSetX,y:this.offSetY}

        }
        this.Chain = Constraint.create(options);
        World.add(world,this.Chain);
    
    }
    display(){
        var PointA = this.Chain.bodyA.position;
        var PointB  = this.Chain.bodyB.position;
        strokeWeight(4);
        line(PointA.x,PointA.y,PointB.x,PointB.y);
    }
    }