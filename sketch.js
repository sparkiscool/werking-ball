const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var universe,earth
var ground1 
var box1,box2,box3,box4,box5
var ball1
var line1


function setup(){
createCanvas(3000,800)
universe = Engine.create()
earth = universe.world
box1 = new box(900,80,70,70)
box2 = new box(900,80,70,70)
box3 = new box(900,80,70,70)
box4 = new box(900,80,70,70)
box5 = new box(900,80,70,70)
ball1 = new ball(200,200,80,80)
line1 = new line11(ball1.body,{x:500,y:50})
ground1 = new ground(900,600,1900,20)
}
  


function draw(){
background("gray")
Engine.update(universe)

ground1.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
ball1.display()
line1.display()
}
function mouseDragged(){
Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}
