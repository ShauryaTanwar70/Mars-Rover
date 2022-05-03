canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
rover_height=90;
rover_width=100;
rover_x=500;
rover_y=300;

// background_image="mars.jpg";
rover_image="rover.png";

nasa_array=["mars.jpg","mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];
random_number= Math.floor(Math.random()*4);
background_image= nasa_array[random_number];

function add(){
    background_imgTag=new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src= background_image;

    rover_imageTag= new Image();
    rover_imageTag.onload= uploadRover;
    rover_imageTag.src= rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0,0,canvas.width,canvas.height );

}

function uploadRover() {
    ctx.drawImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38'){
        console.log("up");
        up();
    }
    if(keypressed=='40'){
        console.log("down");
        down();
    }
    if(keypressed=='37'){
        console.log("left");
        left();
    }
    if(keypressed=='39'){
        console.log("right");
        right();
    }
}
function up(){
    if(rover_y>=0){
        rover_y= rover_y-10
        console.log("When up arrow is pressed x="+ rover_x+"-y="+ rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if(rover_y<=500){
        rover_y= rover_y+10
        console.log("When up arrow is pressed x="+ rover_x+"-y="+ rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x= rover_x-10;
        console.log("When up arrow is pressed x="+ rover_x+"-y="+ rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x= rover_x+10;
        console.log("When up arrow is pressed x="+ rover_x+"-y="+ rover_y);
        uploadBackground();
        uploadRover();
    }
}