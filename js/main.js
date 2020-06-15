/**
 *
 * main
 */

var codeKey = 0;
var relativeY = 0;
var inMouse = false;
var scoreA = 0;
var scoreB = 0;
var limitScore=0;
var maxScore=21;
var minScore=3;
var isStopped=false;
var canvasPong = document.getElementById("canvas_pong");

var pong;

function draw() {
    pong.draw();
   
    if(scoreA==limitScore || scoreB==limitScore || isStopped){
    	cancelAnimationFrame(draw);
    	pong.showGameOver();
    	document.getElementById('start-button').hidden=false;
        document.getElementById('stop-button').hidden=true;
    	document.getElementById('limit-score').disabled=false;
    }else{
    	requestAnimationFrame(draw);
    }
}

function startGame(){
    pong = new Pong(document, canvasPong, 0, 0);
	scoreA=scoreB=0;
    isStopped=false;
    document.getElementById('start-button').hidden=true;
    document.getElementById('stop-button').hidden=false;
	document.getElementById('limit-score').disabled=true;
	limitScore = document.getElementById('limit-score').value;
	draw();
}