/*class Rubber {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction': 5,
          'density': 1
           
      }
      
      this.body = Bodies.circle(x, y, radius, [options]);
      this.radius = 
      
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("#ff8c1a");
      stroke("white")
      strokeWeight(3)
      rect(0, 0, this.width, this.height);
      pop();
    }
  }*/