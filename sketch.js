var bg , bgImg
var snow, snowImg


function preload(){
  bgImg = loadImage("snow1.jpg")
  snowImg =  loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(bgImg);  
  drawSprites();

  if(frameCount% 60 === 0){
    snow.push(new Snow(random(width/2 - 100 , width/ 2 + 100), 10 , 10))
  }
  

  for(var j = 0; j<snow.length; j++){
        snow[j].display();
 }
}
