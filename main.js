function preload()
{
 mustache_filter=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup()
{
 canvas=createCanvas(300,300);
 canvas.center();
 video=createCapture(VIDEO);
 video.size(300,300);
 video.hide();
 posenet=ml5.poseNet(video,modelloaded);
 posenet.on('pose',gotposes);
}

function modelloaded()
{
    console.log("model is loaded");

}
 var mustachex="";
 var mustachey="";
function gotposes(results)
{
 if(results.length>0)
 {
     console.log(results);
     mustachex=results[0].pose.nose.x-15;
     mustachey=results[0].pose.nose.y;
 }
}

function draw()
{
 image(video,0,0,300,300);
 image(mustache_filter,mustachex,mustachey,40,40);
}

function take_snapshot()
{
    save('jonathan.png');
}