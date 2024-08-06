let testVariable = 28; 
let arrayOfColorChoices = ['red', 'white', 'blue', 'purple'];
let myWonderfulTint;


function origami() {

  return random(arrayOfColorChoices);
}

function setup() {
  createCanvas(400, 400);
  myWonderfulTint = origami(); 
  background(myWonderfulTint);
  fill('white');
  stroke('pink');

  for(let x=30; x<390; x+=30){
    for(let y=30; y<390; y+=30){
      if(x==90 && y==300){
        fill('black');
      } else {
        fill('white');
      }
      circle(x, y, 20);
    }
  }
}
