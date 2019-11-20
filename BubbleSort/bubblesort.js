//initialize the array
let bubbleArray = new Array(10);
let timesRan = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //create random values in the array
    for (let i = 0; i < bubbleArray.length; i++)
    {
        bubbleArray[i] = floor(random(50,100));
    }
    background(200, 200, 105);
}

function draw() {
<<<<<<< Updated upstream

    if (!isSorted(bubbleArray)) {
        setTimeout(bubbleSort(bubbleArray), 500);
    }
    //drawBubble(bubbleArray);
=======
    if (!isSorted(bubbleArray))
        bubbleSort(bubbleArray);
    background(100, 170, 225);
    drawBubble(bubbleArray);
    frameRate(.5);
>>>>>>> Stashed changes
}
function bubbleSort(arr)
{
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap arr[j+1] and arr[i]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
        drawBubble(arr);
}
function drawBubble(arr)
{
    for (let i = 0; i < bubbleArray.length; i++)
    {
<<<<<<< Updated upstream
        fill(255,204, 155-( i * 10));
        circle(50 + (i * 95), 150, bubbleArray[i]);
=======
        fill(0, 165, 200-( i * 20));
        circle(spacing + (i * 95), 150, bubbleArray[i]);
>>>>>>> Stashed changes
        console.log(bubbleArray[i]);
        fill(255, 255, 255);
        stroke(1);
        textAlign(CENTER, CENTER);
        text(bubbleArray[i], 50 + (i * 95), 150);
    }
}
function isSorted(arr)
{
    for (let i = 0; i < arr.length - 1; i++)
    {
        if (arr[i] > arr[i+1])
            return false;
    }
    timesRan++;
    return true;
}

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}