var mapHeight = 900;
var mapWidth = 900;
var spanHeight = 45;
var spanWidth = 45;
var blankList = [];
var snakeList = [];
var mapW = mapWidth / spanWidth;
var mapH = mapHeight / spanHeight;
var dir={
    dir_left: 1,
    dir_right: 2,
    dir_up: 3,
    dir_down: 4
};
var curDir = 4;

window.onload = function(){
    var map = document.getElementById('map');
    initial(map);
    setInterval(logic, 400);
    document.addEventListener('keydown', event => {
        switch(event.keyCode){
            case 37:
                if(curDir != 1){
                    curDir = dir.dir_left;
                }
                break;
            case 39:
                if(curDir != 2){
                    curDir = dir.dir_right;
                }
                break;
            case 38:
                if(curDir != 3){
                    curDir = dir.dir_up;
                }
                break;
            case 40:
                if(curDir != 4){
                    curDir = dir.dir_down;
                }
                break;
        }
    })
}

function initial(map){
    map.style.height = mapHeight + 'px';
    map.style.width = mapWidth + 'px';
    // blank list init
    rowNum = mapHeight / spanHeight;
    colNum = mapWidth / spanWidth;
    for(i = 1; i <= rowNum*colNum; i++){
        tempSpan = document.createElement('span');
        tempSpan.style.width = spanWidth + 'px';
        tempSpan.style.height = spanHeight + 'px';
        tempSpan.id = i;
        map.appendChild(tempSpan);
    }
}

function logic(){
    if(snakeList.length == 0){
        temp = document.getElementById('1');
        temp.className = 'snake';
        snakeList.push(temp);
    }else{
        snakeHead = parseInt(snakeList[snakeList.length - 1].id);
        switch(curDir){
            case 1:
                if(snakeHead % mapW == 1){
                    tempSpan = document.getElementById(snakeHead + mapW - 1);
                }else{
                tempSpan = document.getElementById(snakeHead - 1);
                }
                break;
            case 2:
                if(snakeHead % mapW == 0){
                    tempSpan = document.getElementById(snakeHead - mapW + 1);
                }else{
                tempSpan = document.getElementById(snakeHead + 1);
                }
                break;
            case 3:
                if(snakeHead - mapW <= 0){
                    tempSpan = document.getElementById(snakeHead + (mapH - 1)*mapW);
                }else{
                tempSpan = document.getElementById(snakeHead - mapH);
                }
                break;
            case 4:
                if(snakeHead + mapW > mapW*mapH){
                    tempSpan = document.getElementById(snakeHead - (mapH - 1)*mapW);
                }else{
                tempSpan = document.getElementById(snakeHead + mapH);
                }
        }
        tempSpan.className = 'snake';
                snakeList.push(tempSpan);
                firstNode = snakeList.shift();
                firstNode.className = '';
    }
}
