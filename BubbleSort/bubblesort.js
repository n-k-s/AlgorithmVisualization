//initialize the array
let bubbleArray = new Array(9);
let timesRan = 0;
let spacing = 50;
let fr = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //create random values in the array
    for (let i = 0; i < bubbleArray.length; i++)
    {
        bubbleArray[i] = floor(random(50,100));
    }
    background(255, 150, 135);
}

function draw() {
    if (!isSorted(bubbleArray))
        bubbleSort(bubbleArray);
    background(255, 150, 135);
    drawBubble(bubbleArray);
    frameRate(fr);
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
}
function drawBubble(arr)
{
    for (let i = 0; i < bubbleArray.length; i++)
    {
        fill(255,204, 155-( i * 10));
        circle(spacing + (i * 95), 150, bubbleArray[i]);
        console.log(bubbleArray[i]);
        fill(0, 102, 153);
        textAlign(CENTER, CENTER);
        text(bubbleArray[i], spacing + (i * 95), 150);
        spacing+=30;
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