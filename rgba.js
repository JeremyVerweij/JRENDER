JRENDER.createRGBA = function(r, g, b, a){
    if(a==undefined||a==undefined||isNaN(a)) return `rgb(${r}, ${g}, ${b})`;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

JRENDER.getRGBAfromHEX = function(hex){
    return JRENDER.createRGBA(parseInt(hex[1] + hex[2], 16), parseInt(hex[3] + hex[4], 16), parseInt(hex[5] + hex[6], 16), parseInt(hex[7] + hex[8], 16));
}

window.dispatchEvent(JLIB.common.scriptLoaded)
