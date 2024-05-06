JRENDER.canvas.text = class extends JRENDER.canvas.renderObject{
    constructor(canvas, text, font, size, x, y, alignH, alignV, color, outline = false, outline_color = "#000000"){
        canvas.ctx.font = size + "px " + font;
        var textMessureTEMP = canvas.ctx.measureText(text);
        super(canvas, x, y, textMessureTEMP.width, size, alignH, alignV);
        this.textMessure = textMessureTEMP;
        this.text = text;
        this.font = font;
        this.size = size;
        this.color = color;
        this.outline = outline;
        this.outline_color = outline_color;

        canvas.elements.push(this);
    }

    render(){
        this.canvas.drawText(this.text, this.size + "px " + this.font, this.calcActualX(), this.calcActualY(), this.color, this.outline, this.outline_color);
    }
}

window.dispatchEvent(JLIB.common.scriptLoaded)
