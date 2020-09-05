class Particle{
    constructor(x,y,radius,colour){
        var options = {
            isStatic  : false,
            restitution : 0.4
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.colour = (random(0,255), random(0,255), random(0,255));
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.colour);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        pop();
    }
}