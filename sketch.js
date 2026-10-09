function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 45, 200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  createCanvas(800, 800);
  background(0);
  noStroke();
  fill(238, 36, 0);
    quad(0, 0,362, 0,362, 316,0, 316);

  fill(237,241,237);
    quad(373,0,800,0,800,316,373,316);
    quad(0,334,362,334,362,511,0,511);
    quad(373,334,800,334,800,511,373,511);
    quad(86,527,362,527,362,800,86,800);
    quad(373,770,608,770,608,800,373,800);
    quad(620,527,800,527,800,800,620,800);
  fill(250, 209, 0);
    quad(0,527,75,527,75,800,0,800);
  fill(31, 32, 117);
    quad(373,527,608,527,608,757,373,757);
  
  for (let y = 527; y < 757; y++) {
  let r = map(y, 527, 757, 31, 28);
  let g = map(y, 527, 757, 31, 22);
  let b = map(y, 527, 757, 117, 103);

  fill(r, g, b);
    rect(373, y, 235, 1);
  }
  for (let y2 = 527; y2 < 800; y2++) {
  let r2 = map(y2, 527, 800, 250, 233);
  let g2 = map(y2, 527, 800, 209, 193);
  

  fill(r2, g2, 0);
    rect(0, y2, 75, 1);
  }

  for (let i = 0; i < 100000; i++){
    let x = random(width);
    let y = random(height);

    fill(0,0,0,15);
    rect(x,y,1,1);
  }

}
