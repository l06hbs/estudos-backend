# Dia 05

## 1. O que é Node.js

- O javaScript nasceu para rodar dentro do navegador. O Node.JS é um programa que permite rodar JavaScript no seu computafor, fora do navegador. Com isso, dá para usar a mesma linguagem para criar servidores e API´s, que é o trabalho de um desenvolvedor back-end.

- Pense assim: O JavaScript é a linguagem, e o node.js é o ambiente onde ele roda, como o terminal é o ambiente onde o git roda.

## 2. Duas formas de rodar JavaScript no Node

- a) direto no terminal (para testar rápido):
Node 
Aparece um >. Digite 2 + 3 e Enter:ele responde 5. Para sair, aperte ctrl+C duas vezes.

- b) Rodando um arquivo(O que você vai usar sempre):
Crie o arquivo ola.js com este conteúdo:
console.log("Olá, mundo!);

E rode no terminal: 
node ola.js

O console.log mostra algo no terminal, como o echo do Bash. Rode e veja o resultado antes de continuar. Nesse caso mostrou a mensagem que escrevi.

## 3. Variáveis: guardar valores com nome

- Const cria uma variável que não pode receber outro valor.
- Let cria uma que pode mudar
- Regra prática: use const sempre, e troque para let só quando o valor precisa mudar.
- Ex: 
const nome = "Lucia";
let idade = 20;
idade = 21;
console.log (nome, idade);

## 4. Tipos de dados
- const texto = "Olá"; // string (texto, entre e aspas).
- const numero = 42; // number
- const verdadeiro = true; // boolean (true ou false).
- console.log(typeof texto); // string
- console.log(typeof numero); // number
- O typeof mostra o tipo de um valor. Para montar um texto com variáveis, use a crase (`) e o ${}:
- console.log('Olá, ${nome}! você tem ${idade} anos.');

## 5. Condicionais:decidir o que fazer 

- const nota = 8;
  if (nota>=7) {
    console.log("aprovado");
  } else if (nota >=5) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }

- O node testa as condições de cima para baixo e executa só o primeiro bloco verdadeiro.
- Para comparar, use ===(compara valor e tipo) e evite o ==, que converte tipos e dá surpresas ("5" == 5 dá true). Outro operadores: >, <,  >=, <=, !==(diferente).

## 6. Laços:repetir

- for (let i = 1; i <= 3; i++) {
    console.log("volta", i);
}
- Leia assim:
1. começa com i = 1
2. repete enquando i = <= 3
3. a cada volta, soma 1(i++)
resultado: volta 1,2 e 3.

## 7. Node não é navegador 

- No navegador existem document e window, para mexer na página. No Node não existem, porque não há página. Prove:
- console.log(typeof window);
- Aparece undefined. O que o Node tem em compensação, e você vai usar nas próximas semanas, é a capacidade de ler arquivos, criar servidores e receber requisições. É isso que vai tornar o JavaScript uma ferramenta de back-end.

## Node.Js

- O Node.Js é um ambiente que roda JavaScript fora do navegador, no computador ou no servidor.
- Rodar um arquivo: node arquivo.js.

## Fundamentos JavaScript

- Const não pode receber outro valor; let pode. Comelo com const e só uso let quando o valor muda.
- comparar com === (valor e tipo), nunca com ==.
- if/ else if/ else teste de cima para baixo e para na primeira condição verdadeira, então a ordem importa.
- for tem três partes início, condição e passo.
- Acumulador: uma variável criada antes do laço, que vai guardando o total (total = total + i).
- % devolve o resto da divisão.

## Erros que cometi

- (nota >= 5 <=6) não significa "entre 5 e 6"; cada comparação precisa ser completa, ligadas por &&.
- Valores ficos dentro do texto, o que muda vem de variável.

## Backend na prática

- (process.argv[]) guarda os argumentos do comando; o primeiro meu é o [2].
- Tudo que chega na linha de comando é texto. Converte com (Number()).
- Validar entrada: se faltar dado, aviso como usar e paro com (process.exit(1)).
- Módulos: (module.exports) oferece algo para fora, e (require(./arquivo)) importa em outro arquivo
