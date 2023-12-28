var img;

const snowflakes = [];
const ground = [];

const minSpeed = 1;
const maxSpeed = 5;

function preload() {
  img = loadImage("img/cats.png");
}

function setup() {
  createCanvas(500, 500);
  background(255,255,255);
  // imageMode(CENTER);
  image(img,width,height,width,height);
  img.filter(BLUR, 0);
  
  noSmooth();
  stroke(255);
  fill(255);
  
    for(let i = 0; i < 100; i++){
    snowflakes.push(createVector(
      random(width), random(height),
      random(minSpeed, maxSpeed)));
  }

  for(let x = 0; x < width; x++) {
    ground[x] = height;
  }
  
}

function draw(){
  background(img);
  
  image(img,width,height,width,height);
  
  //Blurry the image according to mouseX======
  let blurAmount = map(mouseY, 0, width, 0, 10);
  filter(BLUR, blurAmount);
  console.log(blurAmount);
  
  //Snowflake drop==========
  for(const snowflake of snowflakes) {
    snowflake.y += snowflake.z;

    rect(snowflake.x, snowflake.y, 1, 1);

    if(snowflake.y >= ground[floor(snowflake.x)]) {
      ground[floor(snowflake.x)]--;

      snowflake.x = random(width);
      snowflake.y = 0;
    }
  }

  for(let x = 0; x < width; x++) {
    rect(x, ground[x], 1, height - ground[x]);
  }
  
}

function mousePressed() {
  snowflakes.push(createVector(mouseX, mouseY,
                               random(minSpeed, maxSpeed)));
}

function mouseDragged() {
  snowflakes.push(createVector(mouseX, mouseY,
                               random(minSpeed, maxSpeed)));
}