var JRENDER = {};
JLIB.extensions.JRENDER = JRENDER;

var JRENDER_SRC = [
    {src: "canvas/createNewCanvas", requirements: [], enabled: () => true}
];

JLIB_LOADER.LOAD_EXTENSION_SRC_LIST(JRENDER_SRC, "JRENDER");