//initialize the array
let n = 12;
let bubbleArray = new Array(n);
let timesRan = 0;
let spacing = 80;
let fr = 1;
let i = 0;
let j = 0;
let slider;

function setup() {
    createCanvas(windowWidth, windowHeight);
    slider = createSlider(1, 20, 12, 1);
    slider.position(50,50);
    //slider.style('width', '80px');

    for (let i = 0; i < bubbleArray.length; i++)
    {
        bubbleArray[i] = floor(random(50,100));
    }
    background(255, 150, 135);

}

function draw() {
    //let n = slider.value();

    if (!isSorted(bubbleArray))
        bubbleSort(bubbleArray);
    background(255, 150, 135);
    drawBubble(bubbleArray);
    frameRate(.5);
}
function bubbleSort(arr)
{
    if (i < n - 1)
    {
        if (arr[j] > arr[j + 1]) {
            // swap arr[j+1] and arr[i]
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
    j++;
    if (j >= n - i - 1)
    {
        j = 0;
        i++;
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


        bubbleSort(arr);
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
function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}
