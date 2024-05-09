function setup()
{
    canvas = createCanvas(680, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 230, 150, 220, 200);
    fill("green");
    stroke("red");
    circle(50, 430, 80);
    circle(630, 430, 80);
    circle(50, 50, 80);
    circle(630, 50, 80);
    fill("red");
    stroke("green");
    rect(50, 430, 600, 13);
    rect(50, 50, 600, 13);
    rect(50, 50, 15, 400);
    rect(630, 50, 15, 400);
}

function take_snapshot()
{
    save('student_name.png');
}