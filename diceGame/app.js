/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var MAX_DICE = 6;
var isPlayer1Turn = true;
var diceBut = document.getElementsByClassName('btn-roll')[0];
var holdBut = document.getElementsByClassName('btn-hold')[0];
var clearBut = document.getElementsByClassName('btn-new')[0];
var player0Panel = document.getElementsByClassName('player-0-panel')[0];
var player1Panel = document.getElementsByClassName('player-1-panel')[0];
var player0 = {
    global: 0,
    round: 0,
    id: 0,
    winnerId: 1,
    roundScoreHtml: document.getElementById('current-0'),
    globalScoreHtml: document.getElementById('score-0')
};

var player1 = {
    global: 0,
    round: 0,
    id: 1,
    winnerId: 2,
    roundScoreHtml: document.getElementById('current-1'),
    globalScoreHtml: document.getElementById('score-1')
};

function rollDice() { 
    return (Math.floor(Math.random()*Math.floor(MAX_DICE)) + 1);
}

function addRoundScore(player) {
    var rollNum = rollDice();
    document.getElementsByTagName('img')[0].src = ("dice-" + rollNum + ".png");
    if(rollNum === 1){
        player.round = 0;
        isPlayer1Turn = !isPlayer1Turn;
    }else{
        player.round += rollNum;
    }
    player.roundScoreHtml.innerHTML = player.round;
}

function addGlobalScore(player) {
    player.global += player.round;
    player.round = 0;
    player.roundScoreHtml.innerHTML = 0;
    player.globalScoreHtml.innerHTML = player.global;
    isPlayer1Turn = !isPlayer1Turn;
    if(player.global >= 100){
        alert("winner is player:" + player.winnerId);
        setZero(0);
    }
}

function setZero(){
    player0.globalScoreHtml.innerHTML = 0;
    player0.roundScoreHtml.innerHTML = 0;
    player0.round = 0;
    player0.global = 0;
    player1.globalScoreHtml.innerHTML = 0;
    player1.roundScoreHtml.innerHTML = 0;
    player1.round = 0;
    player1.global = 0;
    isPlayer1Turn = true;
    player0Panel.classList.add('active');
    player1Panel.classList.remove('active');
}

window.onload = function() {
    setZero();
    diceBut.onclick = function() {
        if(isPlayer1Turn) {
            player0Panel.classList.add('active');
            player1Panel.classList.remove('active');
            addRoundScore(player0);
        }else{
            player1Panel.classList.add('active');
            player0Panel.classList.remove('active');
            addRoundScore(player1);
        }            
    }
    
    holdBut.onclick = function() {
        if(isPlayer1Turn){
            player0Panel.classList.add('active');
            player1Panel.classList.remove('active');
            addGlobalScore(player0);
        }else{
            player1Panel.classList.add('active');
            player0Panel.classList.remove('active');
            addGlobalScore(player1);
        }
    }
    
    clearBut.onclick = function() {
        setZero();
    }
}

