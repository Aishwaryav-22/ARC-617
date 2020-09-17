//  Step 1: declare a variable
let boxX = 202;
let boxY = 252;
let boxZ = 202;
let boxA = 248;
let boxB = 250;
let boxC = 250;
let rightdirection = true;

//  Step 2: initialize the variable


function setup() {
  createCanvas(600, 600);
}

  function draw() {
    if(boxX > 300){
      rightdirection = false;
    }
    if(boxY < 200){
      rightdirection = true;
    }
    background(0);
    rect(boxX, 302, 46, 46);
    rect(boxY, 302, 46, 46);
    rect(boxZ, 352, 96, 50);
    rect(boxA, 252, 6, 46);
    arc(boxB, 400, 100, 100, 0, PI);
    arc(boxC, 400, 96, 96, 0, PI);
    fill(255,255,255);


// Move this box to the right


//  Step 3: use the variable!
//  rect(____, 300, 50, 50)
if (rightdirection){
boxX = boxX + 1;
boxY = boxY + 1;
boxZ = boxZ + 1;
boxA = boxA + 1;
boxB = boxB + 1;
boxC = boxC + 1;
} else {
  boxX = boxX - 1;
  boxY = boxY - 1;
  boxZ = boxZ - 1;
  boxA = boxA - 1;
  boxB = boxB - 1;
  boxC = boxC - 1;
}


}
