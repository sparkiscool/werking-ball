class ground{
    constructor(x,y,width,height){
        var options = {isStatic:true}
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(earth,this.body)
    }
display(){
    var storage = this.body.position
    rectMode(CENTER)
    rect(storage.x,storage.y,this.width,this.height)
    
}


}    