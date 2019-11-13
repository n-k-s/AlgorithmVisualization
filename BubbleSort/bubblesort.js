//initialize the array
let bubbleArray = new Array(10);
function setup() {
    createCanvas(windowWidth, windowHeight);
    //create random values in the array
    for (let i = 0; i < bubbleArray.length; i++)
    {
        bubbleArray[i] = floor(random(30));
    }
}

function draw() {
    background(255,50,235);


}
