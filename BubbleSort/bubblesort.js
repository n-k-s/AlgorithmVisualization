//initialize the array
let bubbleArray = new Array(10);
let timesRan = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //create random values in the array
    for (let i = 0; i < bubbleArray.length; i++)
    {
        bubbleArray[i] = floor(random(50, 100));
    }
    background(255, 150, 135);
}

function draw() {

    if (!isSorted(bubbleArray)) {
        setTimeout(bubbleSort(bubbleArray), 500);
    }
    //drawBubble(bubbleArray);
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
        fill(255,204, 155-( i * 10));
        circle(50 + (i * 95), 150, bubbleArray[i]);
        console.log(bubbleArray[i]);
        text(bubbleArray[i], 50 + (i * 95), 150);
        fill()
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