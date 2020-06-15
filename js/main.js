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
var canvasPong = document.getElementById("canvas_pong");

var pong = new Pong(document, canvasPong, 0, 0);

function draw() {
    pong.draw();
   

    if(scoreA==limitScore || scoreB==limitScore){
    	cancelAnimationFrame(draw);
    	pong.showGameOver();
    	document.getElementById('start-button').disabled=false;
    	document.getElementById('limit-score').disabled=false;
    }else{
    	requestAnimationFrame(draw);
    }
}

function startGame(){
	scoreA=scoreB=0;
	document.getElementById('start-button').disabled=true;
	document.getElementById('limit-score').disabled=true;
	limitScore = document.getElementById('limit-score').value;
	draw();
}