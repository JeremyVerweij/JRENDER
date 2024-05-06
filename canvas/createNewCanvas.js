JRENDER.canvas = {};

JRENDER.canvas.canvas = class{
    constructor(name = "", fullScreen = false, canvasFullScreen = false, keepWidthAtHeight = true, pixelArt = true, scaleWithMouseWheel = false, minScale = 1, maxScale = 1, scaleSpeed = 0.008, canvas_width = 100, canvas_height = 100, background_color = "#000000", center = true, x_offset = 0, y_offset = 0, width = 0, height = 0){
        this.name = name;
        this.fullScreen = fullScreen;
        this.pixelArt = pixelArt;
        this.background_color = JRENDER.getRGBAfromHEX(background_color);
        this.center = center;
        this.x_offset = x_offset;
        this.y_offset = y_offset;
        this.width = (fullScreen ? JLIB.api.windowSize.width : width);
        this.height = (fullScreen ? JLIB.api.windowSize.height : height);
        this.keepWidthAtHeight = keepWidthAtHeight;
        this.scaleWithMouseWheel = scaleWithMouseWheel;
        this.minScale = minScale;
        this.maxScale = maxScale;
        this.scaleSpeed = 1 / scaleSpeed;
        this.elements = [];
        this.scale = 1;
        this.originx = 0;
        this.originy = 0;
        this.canvasFullScreen = false;

        if(this.fullScreen)this.canvasFullScreen = canvasFullScreen;

        this.canvas_width = (this.canvasFullScreen ? JLIB.api.windowSize.width : canvas_width);
        this.canvas_height = (this.canvasFullScreen ? JLIB.api.windowSize.height : canvas_height);

        if(this.keepWidthAtHeight){
            if(this.width > this.height) this.width = this.height;
            if(this.height > this.width) this.height = this.width;
        }

        this.html = document.createElement("canvas")
        this.html.id = "JRENDER_CANVAS#" + name;
        if(this.pixelArt) this.html.style.imageRendering = "pixelated";
        this.html.style.position = "fixed";
        this.html.style.width = this.width + "px";
        this.html.style.height = this.height + "px";
        this.html.width = this.canvas_width;
        this.html.height = this.canvas_height;
        if(this.center){
            this.html.style.left = (((JLIB.api.windowSize.width - this.width) / 2) + this.x_offset) + "px";
            this.html.style.top = (((JLIB.api.windowSize.height - this.height) / 2) + this.y_offset) + "px";
        }else{
            this.html.style.left = this.x_offset + "px";
            this.html.style.top = this.y_offset + "px";
        }
        this.html.style.backgroundColor = this.background_color;

        this.ctx = this.html.getContext('2d');

        document.body.appendChild(this.html);

        if(this.fullScreen)JLIB.api.addResizeEvent(() => {
            this.width = JLIB.api.windowSize.width;
            this.height = JLIB.api.windowSize.height;

            if(this.canvasFullScreen){
                this.canvas_width = JLIB.api.windowSize.width;
                this.canvas_height = JLIB.api.windowSize.height;
                this.html.width = this.canvas_width;
                this.html.height = this.canvas_height;
            }

            if(this.keepWidthAtHeight){
                if(this.width > this.height) this.width = this.height;
                if(this.height > this.width) this.height = this.width;
            }

            this.html.style.width = this.width + "px";
            this.html.style.height = this.height + "px";

            if(this.center){
                this.html.style.left = (((JLIB.api.windowSize.width - this.width) / 2) + this.x_offset) + "px";
                this.html.style.top = (((JLIB.api.windowSize.height - this.height) / 2) + this.y_offset) + "px";
            }
        });

        if(this.scaleWithMouseWheel) JLIB.api.addWheelEvent((e) => this.scaleFunc(e));
        this.scaleEnable = () => true;
    }

    setScaleCancelor(_callback){
        this.scaleEnable = _callback;
    }

    scaleFunc(e){
        if(!this.scaleEnable()) return;
        var mousex = 0, mousey = 0;
        var wheel = e/this.scaleSpeed;
        
        // Define your minimum and maximum scale values
        var minScale = this.minScale; // Change this to your desired minimum scale
        var maxScale = this.maxScale;  // Change this to your desired maximum scale
        
        var zoom = Math.pow(1 + Math.abs(wheel)/2 , wheel > 0 ? 1 : -1);
        
        // Calculate the new scale value
        var newScale = this.scale * zoom;
        
        // Check if the new scale is within the limits
        if (newScale < minScale) {
            zoom = minScale / this.scale;
        } else if (newScale > maxScale) {
            zoom = maxScale / this.scale;
        }
        
        this.ctx.translate(
            this.originx,
            this.originy
        );
        this.ctx.scale(zoom,zoom);
        this.ctx.translate(
            -( mousex / this.scale + this.originx - mousex / ( this.scale * zoom ) ),
            -( mousey / this.scale + this.originy - mousey / ( this.scale * zoom ) )
        );
        
        this.originx = ( mousex / this.scale + this.originx - mousex / ( this.scale * zoom ) );
        this.originy = ( mousey / this.scale + this.originy - mousey / ( this.scale * zoom ) );
        this.scale *= zoom;
        
        this.render(); 
    }

    clear(){
        this.clearCanvasFast();
    }

    drawIMGsimple(htmlElement, x, y, w, h) {
        this.ctx.drawImage(htmlElement, x, y, w, h);
    }

    drawIMGcomplex(htmlElement, dx, dy, dw, dh, sx, sy, sw, sh) {
        this.ctx.drawImage(htmlElement, sx, sy, sw, sh, dx, dy, dw, dh);
    }

    clearCanvasFast(){
        this.ctx.fillStyle = this.background_color;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    clearCanvas(){
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    drawLine(color, size, sx, sy, ex, ey){
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = size;
        this.ctx.beginPath();
        this.ctx.moveTo(sx, sy);
        this.ctx.lineTo(ex, ey);
        this.ctx.stroke();
    }

    drawRect(color, x, y, w, h, border = false, border_width, border_color){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, w, h);

        if(!border) return;

        this.ctx.lineWidth = border_width;
        this.ctx.strokeStyle = border_color;
        this.ctx.strokeRect(x, y, w, h);
    }

    drawText(text, font, x, y, color, outline = false, outline_color){
        this.ctx.font = font;
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, x, y);

        if(!outline) return;

        this.ctx.strokeStyle = outline_color;
        this.ctx.strokeText(text, x, y);
    }

    getBox(){
        return JLIB.common.convertToBox({x: this.x_offset, y: this.y_offset, width: this.width, height: this.height});
    }

    render(){
        this.clear();

        for (let i = 0; i < this.elements.length; i++) {
            const element = this.elements[i];
            element.render();
        }
    }
}

window.dispatchEvent(JLIB.common.scriptLoaded)
