const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    description: "base a multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    description: "listar la tabla",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    description: "limite de numero a multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "la base tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
