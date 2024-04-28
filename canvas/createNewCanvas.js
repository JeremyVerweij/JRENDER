JRENDER.canvas = {};

JRENDER.canvas.canvas = class{
    constructor(name, fullScreen = false, pixelArt = true, background_color = "#000000", center = true, x_offset = 0, y_offset = 0, width = null, height = null){
        this.name = name;
        this.fullScreen = fullScreen;
        this.pixelArt = pixelArt;
        this.background_color = background_color;
        this.center = center;
        this.x_offset = x_offset;
        this.y_offset = y_offset;
        this.width = (fullScreen ? JLIB.api.windowSize.width : width);
        this.height = (fullScreen ? JLIB.api.windowSize.height : height);

        this.html = document.createElement("canvas")
        this.html.id = "JRENDER_CANVAS#" + name;
        if(this.pixelArt) this.html.style.imageRendering = "pixelated";
        this.html.style.position = "fixed";
        this.html.style.width = this.width + "px";
        this.html.style.height = this.height + "px";
        if(this.center){
            this.html.style.left = (((JLIB.api.windowSize.width - this.width) / 2) + this.x_offset) + "px";
            this.html.style.top = (((JLIB.api.windowSize.height - this.height) / 2) + this.y_offset) + "px";
        }else{
            this.html.style.left = this.x_offset;
            this.html.style.top = this.y_offset;
        }
        this.html.style.backgroundColor = this.background_color;

        this.ctx = this.html.getContext('2d');

        document.body.appendChild(this.html);

        if(this.fullScreen)JLIB.api.addResizeEvent(() => {
            this.width = JLIB.api.windowSize.width;
            this.height = JLIB.api.windowSize.height;

            this.html.style.width = this.width + "px";
            this.html.style.height = this.height + "px";

            if(this.center){
                this.html.style.left = (((JLIB.api.windowSize.width - this.width) / 2) + this.x_offset) + "px";
                this.html.style.top = (((JLIB.api.windowSize.height - this.height) / 2) + this.y_offset) + "px";
            }
        });
    }

    drawIMGsimple(htmlElement, x, y, w, h) {
        this.ctx.drawImage(htmlElement, x, y, w, h);
    }

    drawIMGcomplex(htmlElement, dx, dy, dw, dh, sx, sy, sw, wh) {
        this.ctx.drawImage(htmlElement, sx, sy, sw, sh, dx, dy, dw, dh);
    }

    clearCanvasFast(){
        this.ctx.fillStyle = this.background_color;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }
}


// var a = new JRENDER.canvas.canvas("test", true)