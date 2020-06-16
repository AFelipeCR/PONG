/**
 * ControlBall.
 *
 * @class ControlBall
 * @extends {Control}
 */

class ControlBall extends Control {

    constructor(document, canvas, context, ball, paddleL,paddleR) {
        super(document, canvas, context, ball);
        this.paddleL = paddleL;
        this.paddleR = paddleR;
        this.deltaX = 2*relSize;
        this.deltaY = 1*relSize;
        this.leftLimit = this.figure.radius;
        this.rightLimit = this.canvas.width - this.figure.radius;
        this.downLimit = this.canvas.height - this.figure.radius;
        this.verticalDirDown = true;
        this.horizontalDirRight = true;
    }

    move() {

        if (this.horizontalDirRight) {
            if(this.figure.posY + this.deltaX > this.paddleR.posY
                && this.figure.posY + this.deltaX < this.paddleR.posY + this.paddleR.height
                && this.figure.posX + this.deltaX > this.paddleR.posX
                && this.figure.posX + this.deltaX < this.paddleR.posX + this.paddleR.width){
                this.horizontalDirRight = false;
                this.deltaY += 0.05*relSize;
                this.deltaX += 0.1*relSize;
            } else if (this.figure.posX + this.deltaX > this.rightLimit) {
                scoreA++;
                this.deltaY=1*relSize;
                this.deltaX=2*relSize;
                this.figure.posX=this.canvas.width / 2;
                this.figure.posY=this.canvas.height / 2;
                this.horizontalDirRight = false;
                this.verticalDirDown = Math.floor(Math.random() * 2) == 0;
            } else {
                this.figure.goToRight(this.deltaX);
            }
        } else {
            if(this.figure.posY + this.deltaX > this.paddleL.posY
                && this.figure.posY + this.deltaX < this.paddleL.posY + this.paddleL.height
                && this.figure.posX - this.deltaX < this.paddleL.posX + this.paddleL.width
                && this.figure.posX - this.deltaX > this.paddleL.posX){
                this.horizontalDirRight = true;
                this.deltaY += 0.05*relSize;
                this.deltaX += 0.1*relSize;
            } else if (this.figure.posX - this.deltaX < this.leftLimit) {
                scoreB++;
                this.deltaY=1*relSize;
                this.deltaX=2*relSize;
                this.figure.posX=this.canvas.width / 2;
                this.figure.posY=this.canvas.height / 2;
                this.horizontalDirRight = true;
                this.verticalDirDown = Math.floor(Math.random() * 2) == 0;
            } else {
                this.figure.goToLeft(this.deltaX);
            }
        }

        if(this.verticalDirDown){
             if (this.figure.posY + this.deltaY > this.downLimit) {
                this.verticalDirDown = false;
             }else{
                this.figure.goToDown(this.deltaY);
             }
        }else{
            if(this.figure.posY - this.deltaY < this.leftLimit){
                this.verticalDirDown = true;
             }else{
                this.figure.goToUp(this.deltaY);
             }
        }

        this.figure.draw();
    }
}
