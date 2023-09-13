
function setup() {
    createCanvas(1080, 1000);
    background(204,255,229);    
}

function draw() {
    fill("pink")
    strokeWeight(0)
    ellipse(200, 300, 300, 300)
    ellipse(450, 300, 300, 300)
    rotate(PI / 4.0)
    rect(380, -82, 300, 300)
    fill("beige")
    strokeWeight(0)
    square(450, 30, 55, 20, 15, 10, 5);

}
