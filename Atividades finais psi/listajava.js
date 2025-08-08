// 01 - Para iniciar de maneira simples, vamos começar apenas com uma impressão na tela.
// Utilizando o console.log exiba alguma mensagem no console.
console.log("Mensagem exibida com sussesso!!!")

// 02 - Crie uma variável chamada nome e armazene o seu nome. Em seguida exiba a
// mensagem "Olá, [nome]" no console. Realize a criação com variável let e const.
let nome = "Ana"
console.log("Olá,",nome,"!")
const nome2 = "Ana"
console.log("Olá,",nome2,"!")

// 03 - Elabore um algoritmo para realizar as seguintes operações matemáticas:
// ● Soma
// ● Subtração
// ● Multiplicação
// ● Divisão
// ● Resto da divisão
// Busque mais informações sobre a biblioteca Math para realizar outras 3 operações.
let num1 = 10;
let num2 = 3;

console.log("Operações básicas:");
console.log("Soma: " + (num1 + num2));
console.log("Subtração: " + (num1 - num2));
console.log("Multiplicação: " + (num1 * num2));
console.log("Divisão: " + (num1 / num2));
console.log("Resto da divisão: " + (num1 % num2));

console.log("\nOperações com a biblioteca Math:");

console.log("Potência: " + Math.pow(num1, num2));

console.log("Raiz quadrada: " + Math.sqrt(num1));

console.log("Arredondamento para maior: " + Math.ceil(4.3));

// 04 - Utilize if e else para declarar se um número é ímpar ou é par.
let numero = 7;

if (numero % 2 === 0) {
  console.log("O número é par.");
} else {
  console.log("O número é ímpar.");
}
// 05 - Utilize if/ else if e else para receber um horário do dia e informar “bom dia”, “boa tarde”,
// “boa noite” ou “boa madrugada”.
let hora = 22;

if (hora >= 5 && hora < 12) {
  console.log("Bom dia!");
} else if (hora >= 12 && hora < 18) {
  console.log("Boa tarde!");
} else if (hora >= 18 && hora < 24) {
  console.log("Boa noite!");
} else {
  console.log("Boa madrugada!");
}


// 06 - Crie uma lista com 10 números, e em seguida, crie um laço de repetição para varrer
// todos os elementos da lista e armazenar os valores pares e os impares em uma nova lista
// separada.

let numeros = [10, 12, 23, 25, 30, 35, 42, 3, 9, 11];
let pares = [];
let impares = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares.push(numeros[i]);
  } else {
    impares.push(numeros[i]);
  }
}

console.log("Pares:", pares);
console.log("Ímpares:", impares);

// 07 - Crie uma função que receba um número como parâmetro e retorne o seu quadrado.
function quadrado(n) {
    return n * n;
  }
  
  console.log(quadrado(5));

// 08 - Crie uma função que recebe um array de números e retorne um novo array contendo
// apenas os números maiores que 10.
function maiorQueDez(lista) {
    return lista.filter(num => num > 10);
  }
  
  console.log(maiorQueDez([14, 11, 92, 25, 12]));


// 09 - Faça um algoritmo que receba a idade do usuário e informe se ele é criança (0-12),
// adolescente (13-17), adulto (18-59) ou idoso (60+).
let idade = 30;

if (idade >= 0 && idade <= 12) {
  console.log("Criança");
} else if (idade >= 13 && idade <= 17) {
  console.log("Adolescente");
} else if (idade >= 18 && idade <= 59) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}

// 10 - Implemente uma função que recebe um callback e executa esse callback após 3
// segundos, imprimindo uma mensagem antes e depois da execução.

function executarComAtraso(callback) {
    console.log("Executando a função em 3 segundos...");
    setTimeout(() => {
      callback();
      console.log("Callback já foi executado!");
    }, 3000);
  }
  
  executarComAtraso(() => {
    console.log("Função enviada como callback.");
  });