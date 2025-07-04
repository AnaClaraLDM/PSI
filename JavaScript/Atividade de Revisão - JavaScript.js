/* Contexto: Parabéns! Você foi escolhido para uma entrevista em uma loja para trabalhar na
parte de programação de um site! Agora, você está na reta final da entrevista, e a última etapa
é um breve desafio para 10 situações hipotéticas da loja, para saber se você consegue
programar as demandas que podem surgir. Elas são:

1. Ao entrar no nosso site, os clientes precisarão ser bem recebidos. Como você faria
uma frase de “Bem-vindo” para o nosso estabelecimento online?

2. Cada parte da loja possui sua própria forma de texto. Preços, Nomes de Produtos,
Nomes dos Clientes, Se o produto está disponível. Tudo isso deve ser mostrado em
forma de variáveis. Escreva 3 tipos diferentes de variáveis que podem ser utilizadas
na loja.

3. Precisamos que descontos e outras fórmulas matemáticas funcionem perfeitamente no
nosso site, para que os clientes não sejam prejudicados com a diferença de preços da
loja física para a online. Crie 3 cálculos matemáticos diferentes.

4. A experiência em nossa loja deve ser única para cada cliente. Crie uma variável para o
nome de algum cliente e a inclua dentro da frase de boas-vindas que você fez
anteriormente.

5. Para a organização de um carrinho de compras, pense que ele é uma lista. Na lista do
Carrinho de Compras, o cliente quer excluir algum item da lista, crie a lista com
possíveis itens da nossa loja a sua escolha. Escolha a posição de algum item de uma
lista qualquer e retorne ao cliente que ele excluiu aquele item do carrinho.

6. Crie uma condição, onde, fazendo a comparação entre o preço de algum produto e a
quantidade de dinheiro que o cliente possui em sua carteira virtual, o código retorne
se a compra será efetuada ou não. Utilize duas variáveis para fazer a comparação.

7. Hora de focar no estoque. Queremos impor um limite de estocagem dentro da loja
online para que não tenha peças demais e pouca demanda. Crie um código de
repetição impondo um limite de peças na loja online, contando quantas peças tem por
vez.

8. A coisa mais importante em um site é o quão rápido ele é para responder o cliente,
pois não podemos deixar várias linhas de código sendo repetidas ao longo do site, ou
ele pode ficar muito lento. Crie 2 funções de algum código das questões anteriores
para acelerar o processamento da loja online.

9. Precisamos que as informações de tudo na loja seja bem descrito, com cada coisa
tendo sua própria característica. Crie 2 objetos que possam ser usados dentro do site,
como produtos, clientes e até funcionários, e que tenham pelo menos 2 características,
cada.

10. Por fim, precisamos organizar os pagamentos dos nossos produtos. Crie 2 funções,
uma para pagamento parcelado, e outra para pagamento com desconto. Faça com que,
no fim, exista um retorno sobre quanto ficará a compra do cliente (qual o preço de
cada parcela e qual o preço final após o desconto).*/

//Questão 1
console.log("Bem-Vindo(a)")

//Questão 2
let preço = 0;
let nome_produto = "";
let nome_cliente = "";
let quantidade_produto = 0;

function produtoDisponível(){
    if (quantidade_produto > 0) {
        console.log(`Temos ${quantidade_produto} unidades de ${nome_produto} disponíveis.\n`);
    } else {
        console.log(`O produto ${nome_produto} está esgotado.\n`);
    }
};


//Questão 3


//Criação de uma classe 
class Loja{
    constructor(preço, nome_produto, nome_cliente, quantidade_produto){
        this.preço = preço;
        this.nome_produto = nome_produto;
        this.nome_cliente = nome_cliente;
        this.quantidade_produto = quantidade_produto;
    };

    boasVindas(){
        console.log(`Olá,${this.nome_cliente}, seja bem-vindo(a)!\nEstamos muito felizes em te ver por aqui!\n`);
    };

    produtoDisponível(){
        if (this.quantidade_produto > 0) {
            console.log(`Temos ${this.quantidade_produto} unidades de ${this.nome_produto} disponíveis.\n`);
        } else {
            console.log(`O produto ${this.nome_produto} está esgotado.\n`);
        }
    };
    mostrarProduto(){
        console.log(`Produto: ${this.nome_produto}\nQuantidade: ${this.quantidade_produto}.\n`);
    };
    desconto(quantidade){
        if(quantidade <= this.quantidade_produto){
            let total_preco = quantidade * this.preço
            total_preco = total_preco - total_preco *10/100
            console.log(`Com desconto de 10% é possível comprar ${quantidade} ${this.nome_produto} por apenas R$${total_preco},00`)
        }
        else{
            console.log("Não existem produtos suficientes em estoque")
        }
    };
}
const loja1 = new Loja(10, "Shampoo", "Ana Clara", 20);
loja1.boasVindas();
loja1.produtoDisponível();
loja1.mostrarProduto();
loja1.desconto(5)
