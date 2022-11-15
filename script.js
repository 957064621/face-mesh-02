  
let img1;//胡子
let img2;//帽子
let img3;//面部
let img4;//衣服

let img5;//果子左
let img6;//果子右
let img7;//字
let img8;//sb

let img6width = 700;


  function setup(){

    createCanvas(800, 600);
    img1 = loadImage('assert/丰子恺胡子.png');//帽子
    img2 = loadImage('assert/丰子恺帽子.png');//胡子
    img3 = loadImage('assert/面部.png');//
    img4 = loadImage('assert/衣服.png');

    img5 = loadImage('assert/果子左.gif');//
    img6 = loadImage('assert/果子右.gif');//
    img7 = loadImage('assert/字.png');//
    img8 = loadImage('assert/烧饼.png');//


    colorMode(HSB);

    stroke(255);
    strokeWeight(3);
  }

  function draw(){
    imageMode(CENTER);
    clear();
    if(detections != undefined){
      console.log(detections);
      if(detections.multiFaceLandmarks != undefined && detections.multiFaceLandmarks.length >= 1){
        //drawFaceMesh();
        
     
        funnymaozi();
       funnyyanjing1();
      //funnyyanjing2();
        funnyhuzi();
        guozi1();
        guozi2();
        zi();
      shaobing();
      }
    }
  }

  function drawFaceMesh(){
    stroke(255);
    strokeWeight(3);
    noFill();
    beginShape(POINTS);  



    for(let j=0; j<detections.multiFaceLandmarks[0].length; j++){
      let x = detections.multiFaceLandmarks[0][j].x * width;
      let y = detections.multiFaceLandmarks[0][j].y * height;

 

      vertex(x, y);
    }

    endShape();
  }

  function funnyhuzi(){
    let noseX = detections.multiFaceLandmarks[0][11].x * width;
    let noseY = detections.multiFaceLandmarks[0][11].y * height;
    //console.log(noseX, noseY);
   // fill(0, 100, 100);
   // ellipse(noseX, noseY, 80, 80);
    image(img1, noseX, noseY-50,500,500);//胡子
  }

  function funnymaozi(){
    let maoziX = detections.multiFaceLandmarks[0][9].x * width;
    let maoziY = detections.multiFaceLandmarks[0][9].y * height;
    //console.log(noseX, noseY);
   // fill(0, 100, 100);
   // ellipse(noseX, noseY, 80, 80);
    image(img2, maoziX, maoziY+60,600,600);//帽子
  }

  function funnyyanjing1(){
    let yanjing1X = detections.multiFaceLandmarks[0][195].x * width;
    let yanjing1Y = detections.multiFaceLandmarks[0][195].y * height;
    //console.log(noseX, noseY);
   // fill(0, 100, 100);
   // ellipse(noseX, noseY, 80, 80);
    image(img3, yanjing1X, yanjing1Y,550,550);//面部
  }


  function funnyyanjing2(){
    let yanjing2X = detections.multiFaceLandmarks[0][133].x * width;
    let yanjing2Y = detections.multiFaceLandmarks[0][133].y * height;
    //console.log(noseX, noseY);
   // fill(0, 100, 100);
   // ellipse(noseX, noseY, 80, 80);
    image(img4, yanjing2X+30, yanjing2Y,700,700);//衣服
  }

    function guozi1(){
    let yanjing2X = detections.multiFaceLandmarks[0][159].x * width;
    let yanjing2Y = detections.multiFaceLandmarks[0][159].y * height;
    //console.log(noseX, noseY);
   // fill(0, 100, 100);
   // ellipse(noseX, noseY, 80, 80);
    image(img5, yanjing2X+100, yanjing2Y+50,700,700);//果子1
  }

    function guozi2(){
    let yanjing2X = detections.multiFaceLandmarks[0][386].x * width;
    let yanjing2Y = detections.multiFaceLandmarks[0][386].y * height;
    //console.log(noseX, noseY);
   // fill(0, 100, 100);
   // ellipse(noseX, noseY, 80, 80);

    image(img6, yanjing2X-100, yanjing2Y+50,img6width,700);//果子2
  }

    function zi(){
   // console.log(img6width);
    if (img6width >600) {
       image(img7, 650,200,130,320);//果子2
    }
  }

     function shaobing(){
   // console.log(img6width);
    if (img6width >600) {
       image(img8, 400,320,750,750);//果子2
    }
  }
   
   
     



