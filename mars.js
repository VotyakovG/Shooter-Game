var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


var bg = new Image();
var boom = new Image();
var ship = new Image();
var player = new Image();
var dem = new Image();
var bullet = new Image();
var music = new Audio();
var bull = [];
var demp = [];
var timer = 0;
var score = 0;

bg.src = "IMG/bg.jpg";
boom.src = "IMG/boom.png";
ship.src = "IMG/spaceship.png";
player.src = "IMG/pl2.png"
dem.src = "IMG/dem.png"
bullet.src = "IMG/bullet.png"
music.src = "music.mp3"

//start space ship
var Ship1= {x:50 ,y:1};
var grav = 6.5;

//player position
var playerp = {x:200 ,y:400};

//demon position
var demonp = {x:1030, y:300};

//player move
document.addEventListener("keydown", moveRight);

function moveRight(){
  if(event.code =="KeyD"){
  playerp.x = playerp.x + 15;}
  if (playerp.x>=500) {playerp.x=499;}
}


document.addEventListener("keydown", moveLeft);

function moveLeft(){
  if(event.code =="KeyA"){
  playerp.x = playerp.x - 15;}
  if (playerp.x<=200) {playerp.x=201;}
}
document.addEventListener("keydown", moveUp);

function moveUp(){
  if(event.code =="KeyW"){
  playerp.y = playerp.y - 50;} 
  if (playerp.y<=10) {playerp.y=9;}
}

document.addEventListener("keydown", moveDwn);

function moveDwn(){
  if(event.code =="KeyS"){
  playerp.y = playerp.y + 50;} 
  if (playerp.y>=410) {playerp.y=401;}
}





function draw() {
    music.play();
    
    ctx.drawImage(bg, 0, 0, 1024, 550);
    ctx.drawImage(ship, Ship1.x, Ship1.y, 180, 200);
    if(Ship1.y <= 340){
        Ship1.y += grav;} else if (ship.src = boom.src){
        ctx.drawImage(player, playerp.x, playerp.y, 100, 150)
        } 


    for(i in bull) ctx.drawImage(bullet, bull[i].x, bull[i].y, 60, 50)
        //bullet shoots
    if (timer++, timer%50==0) {
        bull.push({x:playerp.x+90, y:playerp.y+50,dx:5, dy:0, del:0});
          
        }


    for( i in bull){
        bull[i].x=bull[i].x + bull[i].dx;
    if (bull[i].x>900) bull.splice(i,1);
        }
       
        //demons
    for(i in demp) ctx.drawImage(dem, demp[i].x, demp[i].y,130, 140)
    if ( timer%90==0) {
        demp.push({ x:demonp.x,  y:Math.random()*450, dx:5, });
               
      }
    for( i in demp){
      demp[i].x=demp[i].x - demp[i].dx;
    if (demp[i].x < bull[i].x && demp[i].y < bull[i].y) demp.splice(i,1);
         
         }
         
      
          //ctx.fillStyle = "white";
    //ctx.font = "24px Verdana";
    //ctx.fillText("SCORE: " + score, 10, cvs.height -505);
    
    requestAnimationFrame(draw);
}

bg.onload = draw;