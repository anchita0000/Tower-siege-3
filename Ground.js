class Ground{
    constructor(){
        var options={
            isStatic:true
        }
  this.ground=Bodies.rectangle(400,540,800,20,options);
  World.add(world,this.ground);
}
display(){
    strokeWeight(1);
    fill(81,139,26);
    rectMode(CENTER);
    rect(this.ground.position.x,this.ground.position.y,800,20);
    
}
}