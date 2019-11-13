//initialize the array
let bubbleArray = new Array(10);
function setup() {
    createCanvas(windowWidth, windowHeight);
    //create random values in the array
    for (let i = 0; i < bubbleArray.length; i++)
    {
        bubbleArray[i] = floor(random(100));
    }

}

function draw() {
    background(255,50,235);
    setTimeout(bubbleSort(bubbleArray), 500);
    //drawBubble(bubbleArray);
}
function bubbleSort(arr)
{
    let n = arr.length;
    for (let i = 0; i < n-1; i++)
    for (let j = 0; j < n-i-1; j++)
    if (arr[j] > arr[j+1])
    {
        // swap arr[j+1] and arr[i]
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
    }
}
function drawBubble(arr)
{
    for (let i = 0; i < bubbleArray.length; i++)
    {
        console.log(bubbleArray[i]);
    }

}