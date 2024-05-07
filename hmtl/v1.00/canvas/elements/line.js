JRENDER.canvas.line = class extends JRENDER.canvas.renderObject{
    constructor(canvas, x, y, alignH, alignV, w, h, color, width, line_invert){
        super(canvas, x, y, w, h, alignH, alignV);
        this.color = color;
        this.line_width = width;
        this.line_invert = line_invert;

        if(this.line_invert) this.render = this.render1;
        else this.render = this.render0;

        canvas.elements.push(this);
    }

    render1(){
        this.canvas.drawLine(this.color, this.line_width, this.calcActualX(), this.calcActualY() + this.height, this.calcActualX() + this.width, this.calcActualY());
    }

    render0(){
        this.canvas.drawLine(this.color, this.line_width, this.calcActualX(), this.calcActualY(), this.calcActualX() + this.width, this.calcActualY() + this.height);
    }
}

window.dispatchEvent(JLIB.common.scriptLoaded)
