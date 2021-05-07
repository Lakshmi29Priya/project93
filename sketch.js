var gameState="START"
var bg,bgI
var player,plr,cars,car1,car1I,car2,car2I,car3,car3I
var arrow
var names
var greet
var heart,hearts,heartI

function preload(){
    bgI=loadImage("bg.png")
    plr=loadImage("car1.PNG")
    car1I=loadImage("car2.PNG")
    car2I=loadImage("car3.PNG")
    car3I=loadImage("car4.PNG")
    heartI=loadImage("life.png")
    arrow=loadImage("arrows.png")
}

function setUp(){
    createCanvas(722,336)
    if(gameState==="PLAY"){

    }

    var name=createElement('h3',"Enter Your Name")
    name.position(165,75)
    var nameInput=createInput()
    nameInput.position(315,95)
    var nameBtn=createButton('Enter')
    nameBtn.position(495,95)
    nameBtn.mousePressed(function click(){
    name.hide()
    nameInput.hide()
    nameBtn.hide()
    nameInput.style('background-color',0)
    names=nameInput.value();
    greet=createElement('h2',"Hello "+names);
    greet.position(285,70)
    console.log(nameInput.value());
  
    if(names.length===0||names.length>10){
        name.show();
        nameInput.show();
        nameBtn.show();
        greet.value=undefined
        greet.hide();
    }
})

bg=createSprite(width-5,127,0,0)
bg.addImage(bgI)

car2=createSprite(60,303,50,30)
car2.addImage(car2I)
car2.scale=0.1

car3=createSprite(160,313,50,30)
car3.addImage(car3I)
car3.scale=0.1

car1=createSprite(120,303,50,30)
car1.addImage(car1I)
car1.scale=0.1

player=createSprite(23,313,50,30)
player.addImage(plr)
player.scale=0.1

hearts=createGroup();

for(var i=25;hearts.length<25;i+=40){
    heart=createSprite(i,70,30,30)
    heart.addImage(heartI)
    heart.scale=0.07
    hearts.add(heart)
}
}

function start(){
    drawSprite(bg)
    drawSprite(car1)
    drawSprite(car2)
    drawSprite(car3)
    drawSprite(player)

    fill(0)
    textSize(40)
    textFont('Raleway')
    text("CAR RACING GAME",width/2-188,height/2-90)
    textSize(18)
    textStyle(BOLD)

    player.x+=1.3
    car1.x+=1.5
    car2.x+=1
    car3.x+=2.5

    if(names!==undefined&&names.length<=10&&names.length!==0){
text("Playing For The First Time?\n\n Press 'ENTER' to check out the rules.\n Press 'ESC' to learn the controls.",width/2-170,height/2-20)
text("Played Before?\n\n Press 'SPACE' to start",width/2-100,height/2+80);

if(player.x>=width+23){
    player.x=-23
}

if(car1.x>=width+23){
    car1.x=-23
}

if(car2.x>=width+23){
    car2.x=-23
}

if(car3.x>=width+23){
    car3.x=-23
}

if(car3.x<=player.x-30){
    car3.x-=1
player.x+=0.5
}

if(car1.x<=car2.x-30){
    car1.x-=0.5
    car2.x+=0.5
}

if(keyDown('SPACE')){
    gameState="PLAY"
    player.x=23
    car1.x=0
    car2.x=150
    car3.x=250
}

if(keyCode===ESCAPE){
    greet.hide();
    tint(60)
    image(bgI,-147,-220)
    fill(255)
    textSize(40)
    textFont('Raleway')
    text("CAR RACING GAME",width/2-182,height/2-80)
    textStyle(NORMAL)
    textSize(20)
    text("Press 'SPACE' to start",width/2-110,height-20)
    arrow.resize(240,114)
    noTint();
    image(arrow,width/2-140,height/2-40)
    text("Switch To Left Lane",258,127)
    text("Move Backwards",107,219)
    text("Move Forwards",430,219)
    text("Switch To Right Lane",255,262)
    textSize(15)
    text("Press 'ENTER' to look at the rules",485,20)
}

else if(keyCode===ENTER){
    textFont('Raleway')
    greet.hide();
    fill(255)
    textSize(40)
    tint(60)
    image(bg1,-147,-220)
    text("CAR RACING GAME",width/2-182,height/2-100)
    textSize(20)
    textStyle(NORMAL)
    text(".............................................................................Rules\n...1. Overtake all the other cars and reach the finish line.\n.......................................2. Avoid crashing into other cars.\n........................................3. Try to finish the race first.\n.................................4. To learn the controls, press 'ESC'.\n......................................... 5. And most importantly, HAVE FUN! ",width/2-262,height/2-30)
    text("Press 'SPACE' to start",width/2-110,height-20)
}
 }
 
    else{
        text("Enter a name less that 10 characters long.",175,150)
    }
}

function play(){
    //displaying players name
    greet.show();
    greet.html(names)
    greet.position(10,-15)

    //infinite background
    if(bg.x<=97){
        bg.x=width-5
    }

    //movement of player
    //move forwards
    if(keyDown(RIGHT_ARROW)){
        bg.x-=3
        player.x=player.x+1.5
    }
    //move backwards
    if(keyDown(LEFT_ARROW)&&bg.x<715){
        bg.x+=3
        player.x=player.x-=0.5
        console.log(bg.x)
        if(bg.x>=710){
            bg.x=710
            player.x-=0.5
            if(player.x<23){
                player.x=23
            }
        }
    }
}