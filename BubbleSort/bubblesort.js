//initialize the array
let bubbleArray = new Array(5);
let timesRan = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //create random values in the array
    for (let i = 0; i < bubbleArray.length; i++)
    {
        bubbleArray[i] = floor(random(100));
    }
    background(255,50,235);
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
            if (!isSorted(arr))
                drawBubble(arr);
        }
    }
        drawBubble(arr);
}
function drawBubble(arr)
{
    for (let i = 0; i < bubbleArray.length; i++)
    {
        console.log(bubbleArray[i]);
        fill(255,204, 255-( i * 10));
        circle(i * 95, 150, bubbleArray[i]);
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