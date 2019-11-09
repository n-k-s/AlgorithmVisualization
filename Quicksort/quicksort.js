
function setup() {
    createCanvas(400, 400);
}
let DVD = {

    xDiagIncreasing: true,
    yDiagIncreasing: false,
    x: 300,
    y: 150

}
function draw() {

    background(0, 0, 0);
    noStroke();
    fill(random(0, 255), random(0, 255), 150);
    square(DVD.x, DVD.y, 20);
    if (DVD.xDiagIncreasing)
    {
        DVD.x += 1;
        if(DVD.x > 380)
        {
            DVD.xDiagIncreasing = false;
        }
    }
    else if (!DVD.xDiagIncreasing)
    {
        DVD.x -= 1;
        if(DVD.x < 0)
        {
            DVD.xDiagIncreasing = true;
        }
    }
    if (DVD.yDiagIncreasing)
    {
        DVD.y += 1;
        if(DVD.y > 380)
        {
            DVD.yDiagIncreasing = false;
        }
    }
    else if (!DVD.yDiagIncreasing)
    {
        DVD.y -= 1;
        if(DVD.y < 0)
        {
            DVD.yDiagIncreasing = true;
        }
    }

}
function mousePressed()
{
    DVD.x = mouseX;
    DVD.y = mouseY;
    DVD.yDiagIncreasing = false;
    DVD.xDiagIncreasing = true;
}