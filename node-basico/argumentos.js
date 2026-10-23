const nome = process.argv[2];
const idadeTexto = process.argv[3];

if (!nome || !idadeTexto) {
  console.log("Uso: node argumentos.js <nome> <idade>");
  process.exit(1);
}

const idade = Number(idadeTexto);

if (Number.isNaN(idade)) {
  console.log("A idade precisa ser um número.");
  process.exit(1);
}

console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}