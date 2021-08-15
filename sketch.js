var ball;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database()
    var monitoring = database.ref("ball/position")
    monitoring.on("value", readPostion)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("ball/position").set({
        "x":  ball.x + x,
        "y":  ball.y + y
    })
    
}

function readPostion(data){
    var changedPositiofromdb = data.val()
ball.x = changedPositiofromdb.x
ball.y = changedPositiofromdb.y
}