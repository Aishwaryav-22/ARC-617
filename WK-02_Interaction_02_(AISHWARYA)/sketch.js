//https://p5js.org/reference/#/p5/rotate
//https://www.youtube.com/watch?v=o9sgjuh-CBM&t=18m0s
//https://genekogan.com/code/p5js-transformations/

let angle = 0;

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
}

function draw() {
  background(0);

push();
translate(200, 200);
rotate(angle);
background(0);
 rect(202, 302, 46, 46)
 rect(252, 302, 46, 46)
 rect(202, 352, 96, 50)
 rect(248, 252, 6, 46)
 arc(250, 400, 100, 100, 0, PI)
 arc(250, 400, 96, 96, 0, PI)
 fill(255,255,255)

pop();

angle++;
}


    // how would you create a spinning object?
