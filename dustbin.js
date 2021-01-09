class Dustbin {
    constructor(x, y,height,width) {
      var options = {
          'isStatic':true,
          //'restitution':0.5,
          //'friction':0.8,
          //'density':1.0,
      }
      this.body = Bodies.rectangle(x, y,height,width, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("white");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };