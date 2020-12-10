class ball{
    constructor(x,y,width,height,angle){
        var options = {friction:1,density:1}
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
    
    ellipseMode(CENTER)
    ellipse(0,0,this.width,this.height)
    pop()
}


}    