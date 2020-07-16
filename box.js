class Box {
    constructor(x, y, width, height){
        var options = {
            restitution: 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
    }

    display(){
        var pos = this.body.position; //namespacing
        var angle = this.body.angle;
        push(); //captures new setting
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0,0, this.width, this.height);
        pop(); //reverts back to the old setting
    }
}