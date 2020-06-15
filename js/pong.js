/**
 * Pong
 *
 * @class Pong
 */

class Pong {
    constructor(document, canvas, posX, posY) {
        this.document = document;
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.posX = posX;
        this.posY = posY;

        var paddleWidth= 10;
        var paddleHeight = 75;

        this.paddleL = new Rectangle(this.canvas, this.context, paddleWidth*5, (this.canvas.height - paddleHeight) / 2, "#dddd11");
        this.paddleR = new Rectangle(this.canvas, this.context, this.canvas.width - paddleWidth * 10, (this.canvas.height - paddleHeight) / 2, "#dddd11");

        this.paddleL.setWidth(paddleWidth);
        this.paddleR.setWidth(paddleWidth);
        
        this.paddleL.setHeigth(paddleHeight);
        this.paddleR.setHeigth(paddleHeight);

        this.controlPaddleA = new ControlPaddle(this.document, this.canvas, this.context, this.paddleL, true);
        this.controlPaddleB = new ControlPaddle(this.document, this.canvas, this.context, this.paddleR, false);

        this.ball = new Circle(this.canvas, this.context, (this.canvas.width / 2), this.canvas.height / 2, "#dd0027");

        this.ball.radius = 5;
        this.controlBall = new ControlBall(this.document, this.canvas, this.context, this.ball, this.paddleL,this.paddleR);
    }

    draw() {
        this.context.clearRect(this.posX, this.posY, this.canvas.width, this.canvas.height);
        this.context.font="30px Consolas";
        this.context.fillText(scoreA + ' | ' + scoreB, (this.canvas.width - 30 * 3) / 2, 30);
        this.controlPaddleA.move();
        this.controlPaddleB.move();
        this.controlBall.move();
    }

    showGameOver(){
        this.context.clearRect(this.posX, this.posY, this.canvas.width, this.canvas.height);
        this.context.font="30px Consolas";
        this.context.fillText("GAME OVER", (this.canvas.width - 30 * 4) / 2, 30);
        this.context.fillText(scoreA + ' | ' + scoreB, (this.canvas.width - 30 * 3) / 2, 70);
    }
}