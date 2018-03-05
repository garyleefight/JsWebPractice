var mapHeight = 900;
var mapWidth = 900;
var spanHeight = 45;
var spanWidth = 45;
var blankList = [];
var snakeHead;
var dir={
    dir_left: 1,
    dir_right: 2,
    dir_up: 3,
    dir_down: 4
};

window.onload = function(){
    var map = document.getElementById('map');
    initial(map);
    setInterval(logic, 400);
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
    if(blankList.length == 0){
        temp = document.getElementById('1');
        temp.className = 'snake';
        blankList.push(temp);
    }else{
        if(blankList.length <= 400){
            temp = document.getElementById(blankList.length+1);
            temp.className = 'snake';
            blankList.push(temp);
        }
    }
}

