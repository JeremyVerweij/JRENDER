JRENDER.canvas.line = class{
    constructor(canvas, xStart, yStart, xEnd, yEnd, color, width){
        this.canvas = canvas;
        this.xStart = xStart;
        this.yStart = yStart;
        this.xEnd = xEnd;
        this.yEnd = yEnd;
        this.color = color;
        this.width = width;

        canvas.elements.push(this);
    }

    render(){
        this.canvas.drawLine(this.color, this.width, this.xStart, this.yStart, this.xEnd, this.yEnd);
    }
}

window.dispatchEvent(JLIB.common.scriptLoaded)
