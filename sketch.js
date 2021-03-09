var maxDrops=100;
function preload(){

}


function setup(){
    var canvas = createCanvas(400,400);
    
}

function draw(){
    background("black")
  for(var i=0; i<maxDrops; i++){
      drop.push(new createDrop(random(0,400),(random(0,400))))

  }
  maxDrops.display()
}