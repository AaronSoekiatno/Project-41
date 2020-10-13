class Drops{
    constructor(x,y){
        var options ={
            restitution:0.1,
            density:0.2,
            friction:0.1
        }
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.body = Bodies.circle(x,y,50,options);
        World.add(world,this.body);
    }

    reposDrops(){
        if(this.body.position.y>=759){
            Matter.Body.setPosition(this.body,{x:random(0,400), y:random(0,400)});
        }
    }

    
    display(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}