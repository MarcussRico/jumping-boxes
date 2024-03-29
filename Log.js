class Log {
    // constructing or building the Log class 
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    // display the required things 
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      // this is push and pop
      push()
    
      fill('yellow')
      translate(pos.x, pos.y)
      rotate(angle);
      strokeWeight(3)
      stroke('white')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop()
    }
  };