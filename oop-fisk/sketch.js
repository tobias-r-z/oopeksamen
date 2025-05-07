let bvektor
let velvektor
let bfisk

function setup() {
  createCanvas(400, 400);
  bvektor = new Vektor(150,200)
  velvektor = new Vektor(1,1)
  bfisk = new fisk(bvektor,velvektor,60,30);
}

function draw() {
  background(220);
  bfisk.show("orange","white");
  bfisk.update()
}


class fisk {
//parameter har en vektor som position og to size parameter for længde og bredde, samt en hastighedsvektor.
  constructor(pos,vel,sizeX,sizeY){
    this.pos=pos
    this.sizeX=sizeX
    this.sizeY=sizeY
    this.vel=vel
  }
  //funktion som skubber fisken, med en bestemt fart pr. frame.
  update(){
    this.pos=this.pos.add(this.vel)
    this.boundaryCheck()
}
  //funktion som tegner selve fisken.
  show(col1,col2){
    fill(col1)
        triangle(this.pos.x, this.pos.y, 
                this.pos.x-this.sizeX, this.pos.y-this.sizeY/2, 
                this.pos.x-this.sizeX, this.pos.y+this.sizeY/2);
        ellipse(this.pos.x,this.pos.y,this.sizeX,this.sizeY)
        fill(col2)
        rect(this.pos.x-this.sizeX/8, this.pos.y-this.sizeY/2,this.sizeX/8, this.sizeY)
        line(this.pos.x,this.pos.y,this.pos.x+this.sizeX/2,this.pos.y)
        circle(this.pos.x+this.sizeX/4,this.pos.y-this.sizeY/4,3)
  }
  boundaryCheck(){
    // check that the fish is inside the canvas
    if ((this.pos.x > width) || (this.pos.x < 0)) {
        this.vel.x = this.vel.x * -1;
    }
    if ((this.pos.y > height) || (this.pos.y < 0)) {
        this.vel.y = this.vel.y * -1;
    }
}
}
//en klasse som laver en vektor, til fisk og andre ting
class Vektor {
  constructor(x,y){
    this.x=x
    this.y=y
  }
  add(other){
    return new Vektor(this.x+other.x,this.y+other.y)
  }
}






