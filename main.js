objects = [];
status = "";

function preload(){
  video = createVideo('');
}


function setup() {
  canvas = createCanvas(480, 380);
  video = createCapture(VIDEO);
  canvas.center();
  video.hide();
}

function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  video.loop();
  video.speed(1);
  video.volume(0);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
 document.getElementById("Number_objects").innerHTML=( objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15)
}