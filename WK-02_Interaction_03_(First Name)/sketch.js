let opacity = 1.0;
let isVisible = true;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  if (opacity < 0.0) {
    opacity = 0;
    isVisible = true;
  } else if (opacity > 1.0) {
    isVisible = false;
  }
  // Render
background(0);
 fill ('rgba(255, 255, 255, ' + opacity + ')');
rect(202, 302, 46, 46)
 stroke('rgba(0, 0, 0, ' + opacity + ')');
rect(252, 302, 46, 46)
 fill ('rgba(255, 255, 255, ' + opacity + ')');
 rect(202, 352, 96, 50)
 fill ('rgba(255, 255, 255, ' + opacity + ')');
rect(248, 252, 6, 46)
 fill ('rgba(0, 0, 0, ' + opacity + ')');
 arc(250, 400, 96, 96, 0, PI)
  fill ('rgba(0, 0, 0, ' + opacity + ')');
 arc(250, 400, 96, 96, 0, PI)
  fill ('rgba(0, 0, 0, ' + opacity + ')');
  fill(255,255,255)



 // Control Visibility
 if (isVisible) {
   opacity = opacity + 0.007;
 } else {
   opacity = opacity - 0.007;
 }
}
