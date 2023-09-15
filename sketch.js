
function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(204,255,229);    
    fill(0);
    ellipse (mouseX, mouseY, 100, 100);
    fill(0);
    rect(0, 0, 50, 50);
    fill (0);
    rect(width-50, 0, 50,50);
    rect(width-50, height-50, 50,50);
    rect(0, height-50, 50,50);
    fill("pink");
    strokeWeight(0);
    ellipse(200, 300, 300, 300);
    ellipse(450, 300, 300, 300);
    rotate(PI / 4.0);
    rect(380, -82, 300, 300);

}
