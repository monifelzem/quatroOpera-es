const entrada1 = prompt("Insira o primeiro número");
const entrada2 = prompt("Insira o segundo número");

const x = parseFloat(entrada1);
const y = parseFloat(entrada2);

const soma = x + y;
const subtração = x - y;
const multiplicação = x * y;
const divisão = x / y;

alert(
  "Resultados: \n" +
    "\nsoma=" +
    "  " +
    soma +
    "\nSubtração=" +
    "  " +
    subtração +
    "\nmultiplicação=" +
    " " +
    multiplicação +
    "\ndivisão=" +
    "  " +
    divisão
);
