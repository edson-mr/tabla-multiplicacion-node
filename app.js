const argv = require("./config/yargs");

const { multiplicar } = require("./helpers/multiplicar");
multiplicar(argv.b, argv.l, argv.h);
