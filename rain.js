class DROPS{
constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':0.6
    }
    this.rain = Bodies.rectangle(x, y, width, height, options);
    
   
    World.add(world, this.body);
    
  }

display(){
    
    ellipse(this.rain.position.x,this.rain.position.y,0.5)
    if(this.rain.position.x > height){
        Matter.Body.setPosition(this.rain,{x:rand(0,400)}, {y:rand(0,400)})
    }
    
  }
}