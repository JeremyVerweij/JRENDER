var JRENDER = {};
JLIB.extensions.JRENDER = JRENDER;

var JRENDER_SRC = [
    {src: "rgba", requirements: [], enabled: () => true},
    {src: "canvas/createNewCanvas", requirements: [], enabled: () => true},
    {src: "canvas/elements/line", requirements: ["canvas/createNewCanvas"], enabled: () => true},
    {src: "canvas/elements/image", requirements: ["canvas/createNewCanvas"], enabled: () => true},
    {src: "canvas/elements/rectangle", requirements: ["canvas/createNewCanvas"], enabled: () => true},
    {src: "canvas/elements/text", requirements: ["canvas/createNewCanvas"], enabled: () => true},
];

JLIB_LOADER.LOAD_EXTENSION_SRC_LIST(JRENDER_SRC, "JRENDER");