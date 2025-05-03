function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    //background
    background(300, 300, 0);
    //sun
    textSize(200);
    text("☀️", 175, 320);
    //cloud one
    textSize(150);
    text("☁️", -50, 150);
    //cloud two
    textSize(150);
    text("☁️", 400, 150);
    //ocean
    fill("blue");
    rect(-100, 250, 1000, 900);
    //bird
    textSize(80);
    text("🏐", mouseX, mouseY);
  }