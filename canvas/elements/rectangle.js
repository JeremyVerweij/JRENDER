JRENDER.canvas.rectangle = class{
    constructor(canvas, color, x, y, w, h, border = false, border_width = 1, border_color = "#000000"){
        this.canvas = canvas;
        this.color = color;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.border = border;
        this.border_width = border_width;
        this.border_color = border_color;

        canvas.elements.push(this);
    }

    render(){
        this.canvas.drawRect(this.color, this.x, this.y, this.w, this.h, this.border, this.border_width, this.border_color);
    }
}

window.dispatchEvent(JLIB.common.scriptLoaded)
