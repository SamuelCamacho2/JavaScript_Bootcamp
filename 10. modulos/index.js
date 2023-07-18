import chalk from 'chalk';
import * as modulosMat from './modulos/controllers';

const suma = modulosMat.suma(5,6)
console.log(chalk.blue("suma"))

const multiplicacion = modulosMat.multiplicacion(5,6)
console.log(chalk.blue("multiplicacion"))
