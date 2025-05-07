function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

class fisk {
//parameter har en vektor som position og to size parameter for længde og bredde.
  constructor(pos,sizeX,sizeY){
    this.pos=pos
    this.sizeX=sizeX
    this.sizeY=sizeY
  }
  //funktion som tegner selve fisken
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
  
}
class Vektor {
  constructor(x,y){
    this.x=x
    this.y=y
  }
  add(other){
    return new Vektor(this.x+other.x,this.y+other.y)
  }
}