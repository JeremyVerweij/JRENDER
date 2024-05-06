JRENDER.canvas.renderObject = class{
    constructor(canvas, x, y, w, h, alignHorizontal = "left", alignVertical = "top") {
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.alignHorizontal = alignHorizontal;
        this.alignVertical = alignVertical;
    }

    render(){
        LOG.error("JRENDER: No render function specified");
    }

    calcActualX(){
        switch (this.alignHorizontal) {
            case "left":
                return this.x
            case "center":
                return (this.canvas.canvas_width - this.width) / 2 - this.x;
            case "right":
                return this.canvas.canvas_width - this.x - this.width;
            default:
                return 0;
        }
    }

    calcActualY(){
        switch (this.alignVertical) {
            case "top":
                return this.y
            case "center":
                return (this.canvas.canvas_height - this.height) / 2 - this.y;
            case "bottom":
                return this.canvas.canvas_height - this.y - this.height;
            default:
                return 0;
        }
    }

    getBox(){
        return JLIB.common.convertToBox({x: this.calcActualX(), y: this.calcActualY(), width: this.width, height: this.height});
    }
}

window.dispatchEvent(JLIB.common.scriptLoaded)
