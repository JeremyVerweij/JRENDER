JRENDER.canvas.image = class{
    constructor(canvas, imageSrc, drawX, drawY, drawWidth, drawHeight, sourceX, sourceY, sourceWidth, sourceHeight){
        this.canvas = canvas;
        this.imageSrc = imageSrc;
        this.drawX = drawX;
        this.drawY = drawY;
        this.drawWidth = drawWidth;
        this.drawHeight = drawHeight;
        this.sourceX = sourceX;
        this.sourceY = sourceY;
        this.sourceWidth = sourceWidth;
        this.sourceHeight = sourceHeight;

        canvas.elements.push(this.imageSrc, this.drawX, this.drawY, this.drawWidth, this.drawHeight, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight);
    }

    render(){
        this.canvas.drawIMGcomplex();
    }
}

window.dispatchEvent(JLIB.common.scriptLoaded)
