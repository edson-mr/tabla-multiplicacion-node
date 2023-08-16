const fs = require("node:fs");
const colors = require("colors");

const multiplicar = (numero = 1, listar = false, hasta = 10) => {
  let salida = "";

  for (let i = 1; i <= hasta; i++) {
    salida += `${colors.yellow(numero)} ${"x".red} ${i} ${"=".red} ${
      numero * i
    }\n`;
  }

  if (listar) {
    console.log("====================".green);
    console.log(`Tabla del ${numero}`.yellow);
    console.log("====================".green);
    console.log(salida);
  }

  fs.writeFile(
    `./salida/tabla-${numero}.txt`,
    salida.replace(/\u001b\[\d{1,2}m/g, ""),
    (error) => {
      if (error) throw error;
      console.log(colors.rainbow(`tabla del ${numero} creada`));
    }
  );
};

module.exports = {
  multiplicar,
};
