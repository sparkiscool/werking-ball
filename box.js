class box{
    constructor(x,y,width,height){
        var options = {restitution:0.8,friction:1,density:1}
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(earth,this.body)
    }
display(){
    var storage = this.body.position
    var angle = this.body.angle
    push()
    translate(storage.x,storage.y)
    rotate(angle)
    
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop()
}


}    