JRENDER.canvas.image = class extends JRENDER.canvas.renderObject{
    constructor(canvas, imageSrc, drawX, drawY, alignH, alignV, drawWidth, drawHeight, sourceX, sourceY, sourceWidth, sourceHeight){
        super(canvas, drawX, drawY, drawWidth, drawHeight, alignH, alignV);
        this.imageSrc = imageSrc;
        this.sourceX = sourceX;
        this.sourceY = sourceY;
        this.sourceWidth = sourceWidth;
        this.sourceHeight = sourceHeight;
        
        canvas.elements.push(this);
    }

    render(){
        this.canvas.drawIMGcomplex(this.imageSrc, this.calcActualX(), this.calcActualY(), this.width, this.height, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight);
    }
}

window.dispatchEvent(JLIB.common.scriptLoaded)
