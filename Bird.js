class Bird{
constructor(x,y){
    var options ={
    'density' : 1,
    'restitution': 1,
    'friction': 1
    }
    this.Body = Bodies.rectangle(x,y,50,50,options);
    this.width = 50;
    this.height = 50;
    World.add(world,this.Body)
}
display(){
 var pos = this.Body.position;
 pos.x = mouseX;
 pos.y =  mouseY;
 var angle = this.Body.angle; 
 push()
 
 fill('red')
 translate(pos.x, pos.y)
 rotate(angle);
 strokeWeight(3)
 stroke('yellow')
 rectMode(CENTER)
 rect(0, 0, this.width, this.height);
 pop()

}


}