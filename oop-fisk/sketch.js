
let bvektor
let velvektor
let bfisk
let food
let vfood
let rvektor
let rfisk

function setup() {
  createCanvas(800, 600);
  bvektor = new Vektor(150,200);
  rvektor= new Vektor(750,500);
  bfisk = new byttefisk(bvektor,60,30);
  vfood = new Vektor(random(1,800),random(1,600))
  food = new mad(vfood)
  rfisk = new rovfisk(rvektor,80,50)

}

function draw() {
  background(100,70,200);

  bfisk.show("orange","white");
  bfisk.sult(food);
  bfisk.update();
  bfisk.spist(rfisk);
  bfisk.jaget(rfisk);
  

  food.show(bfisk);
  food.vandbevægelse();

  rfisk.show("black","blue");
  rfisk.update();
  rfisk.jagt(bfisk);
}


class fisk {
//parameter har en vektor som position og to size parameter for længde og bredde, samt en hastighedsvektor.
  constructor(pos,sizeX,sizeY){
    this.pos=pos
    this.sizeX=sizeX
    this.sizeY=sizeY
  }
  //funktion som skubber fisken, med en bestemt fart pr. frame.
  update(){
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

class byttefisk extends fisk {
  sult(mad){
    if(mad.real===true){
      let vinkel = Math.atan2(mad.pos.y-this.pos.y, mad.pos.x-this.pos.x)
      let fart = 2;
      let ev = new Vektor(Math.cos(vinkel)*fart,Math.sin(vinkel)*fart)
      this.pos=this.pos.add(ev)
    }
  }
  jaget(rovfisk){
    let dx = rovfisk.pos.x - this.pos.x;
    let dy = rovfisk.pos.y - this.pos.y;
    let afstand = Math.sqrt(dx * dx + dy * dy);
  
  if(afstand<100){
    let vinkel = Math.atan2(rovfisk.pos.y-this.pos.y, rovfisk.pos.x-this.pos.x)
    let fart = -1;
    let ev = new Vektor(Math.cos(vinkel)*fart,Math.sin(vinkel)*fart)
    this.pos=this.pos.add(ev)
  }
}

  spist(rovfisk){
    let dx = rovfisk.pos.x - this.pos.x;
    let dy = rovfisk.pos.y - this.pos.y;
    let afstand = Math.sqrt(dx * dx + dy * dy);
  
    if (afstand < 20) {
      this.pos.x = random(1, 800);
      this.pos.y = random(1, 600);
    }
  }
}
class rovfisk extends fisk {
  jagt(bytte) {
    let vinkel = Math.atan2(bytte.pos.y - this.pos.y, bytte.pos.x - this.pos.x);
    let fart = 1.5;
    let retning = new Vektor(Math.cos(vinkel) * fart, Math.sin(vinkel) * fart);
    this.pos = this.pos.add(retning);
  }
}

class mad {
  constructor(pos){
    this.pos=pos
    this.real=false
  }
  vandbevægelse(){
    this.pos = this.pos.add(new Vektor(random(-0.5, 0.5), random(-0.5, 0.5)));
  }
  show(fisk){
    fill("green")
    rect(this.pos.x,this.pos.y,10,10)
    this.real = true
    //en variabel som viser afstanden mellem fisken og maden
    
  let dx = fisk.pos.x - this.pos.x;
  let dy = fisk.pos.y - this.pos.y;
  let afstand = Math.sqrt(dx * dx + dy * dy);

  if (afstand < 10) {
    this.pos.x = random(1, 800);
    this.pos.y = random(1, 600);
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

