/**
 *
 * main
 */

var codeKey = 0;
var relativeY = 0;
var inMouse = false;
var scoreA = 0;
var scoreB = 0;

var canvasPong = document.getElementById("canvas_pong");

var pong = new Pong(document, canvasPong, 0, 0);

function draw() {
    pong.draw();
    requestAnimationFrame(draw);
}

draw();