/**
 * ControlPaddle.
 *
 * @class ControlPaddle
 * @extends {Control}
 */

class ControlPaddle extends Control {

    constructor(document, canvas, context, figure, isKeyboard) {
        super(document, canvas, context, figure);
        this.isKeyboard = isKeyboard;

        if (isKeyboard)
            this.keyCommand = new KeyCommand(this.document);
        else
            this.MouseCommand = new MouseCommand(this.document, this.canvas);
    }

    move() {
        if (this.isKeyboard) {
            switch (codeKey) {
                case keys.DOWN:
                    if (this.figure.posY < (this.canvas.height - this.figure.height)) {
                        this.figure.goToDown(7);
                    }
                    break;
                case keys.UP:
                    if (this.figure.posY > 0) {
                        this.figure.goToUp(7);
                    }

                    break;
            }
        } else {
            if (inMouse) {
                relativeY -= this.canvas.offsetTop;
                if (relativeY > 0) {
                    this.figure.posY = relativeY;
                }
                if (relativeY > this.canvas.height - this.figure.height) {
                    this.figure.posY = this.canvas.height - this.figure.height;
                }
                inMouse = false;
            }
        }


        this.figure.draw();
    }
}