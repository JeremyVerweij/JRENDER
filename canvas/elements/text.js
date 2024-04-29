JRENDER.canvas.text = class{
    constructor(canvas, text, font, size, x, y, color, outline = false, outline_color = "#000000"){
        this.canvas = canvas;
        this.text = text;
        this.font = font;
        this.size = size;
        this.x = x;
        this.y = y;
        this.color = color;
        this.outline = outline;
        this.outline_color = outline_color;

        canvas.elements.push(this);
    }

    render(){
        this.canvas.drawText(this.text, this.size + "px " + this.font, this.x, this.y, this.color, this.outline_color, this.outline_color);
    }
}

window.dispatchEvent(JLIB.common.scriptLoaded)
