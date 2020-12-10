class line11{
    constructor(bodyA,pointB){
        var options = {bodyA:bodyA,pointB:pointB,stiffness:1.2,length:500}
        this.pointB = pointB
        this.line11 = Constraint.create(options)
        World.add(earth,this.line11)
    }
display(){
    var storage = this.line11.position
    var angle = this.line11.angle
    push()
    line(this.line11.bodyA.position.x,this.line11.bodyA.position.y,this.pointB.x,this.pointB.y)
    
    pop()
}


}    