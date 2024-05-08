JRENDER.canvas.rectangle = class extends JRENDER.canvas.renderObject{
    constructor(canvas, color, x, y, alignH, alignV, w, h, border = false, border_width = 1, border_color = "#000000"){
        super(canvas, x, y, w, h, alignH, alignV);
        this.color = color;
        this.border = border;
        this.border_width = border_width;
        this.border_color = border_color;

        canvas.elements.push(this);
    }

    render(){
        this.canvas.drawRect(this.color, this.calcActualX(), this.calcActualY(), this.width, this.height, this.border, this.border_width, this.border_color);
    }
}

window.dispatchEvent(JLIB.common.scriptLoaded)
