class Umb{
    constructor(x,y){
        var options ={
            isStatic: true,
        }
        this.x = x;
        this.y = y;
        this.width = 300;
        this.height = 450;
        this.body = Bodies.circle(x,y,100,options);
        this.image = loadImage("js/umb.png");
        World.add(world,this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}