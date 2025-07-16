/* Contexto: Parabéns! Você foi escolhido para uma entrevista em uma loja para trabalhar na
parte de programação de um site! Agora, você está na reta final da entrevista, e a última etapa
é um breve desafio para 10 situações hipotéticas da loja, para saber se você consegue
programar as demandas que podem surgir. Elas são:*/

/*1. Ao entrar no nosso site, os clientes precisarão ser bem recebidos. Como você faria
uma frase de “Bem-vindo” para o nosso estabelecimento online?*/
function questao1() {
    console.log("Bem-vindo à nossa loja online! Aproveite sua experiência!");
}
questao1();


/*2. Cada parte da loja possui sua própria forma de texto. Preços, Nomes de Produtos,
Nomes dos Clientes, Se o produto está disponível. Tudo isso deve ser mostrado em
forma de variáveis. Escreva 3 tipos diferentes de variáveis que podem ser utilizadas
na loja.*/
function questao2() {
    let preco = 49.90;
    let nomeProduto = "Camiseta básica";
    let produtoDisponivel = true;
    console.log("Preço:", preco, "Produto:", nomeProduto, "Disponível:", produtoDisponivel);
}
questao2();

/*3. Precisamos que descontos e outras fórmulas matemáticas funcionem perfeitamente no
nosso site, para que os clientes não sejam prejudicados com a diferença de preços da
loja física para a online. Crie 3 cálculos matemáticos diferentes.*/
function questao3() {
    let precoOriginal = 100;
    let desconto = precoOriginal * 0.1;
    let precoComDesconto = precoOriginal - desconto;

    let quantidade = 3;
    let totalCompra = precoOriginal * quantidade;

    let mediaPreco = (precoOriginal + precoComDesconto) / 2;

    console.log("Preço com desconto:", precoComDesconto);
    console.log("Total da compra:", totalCompra);
    console.log("Média dos preços:", mediaPreco);
}
questao3();

/*4. A experiência em nossa loja deve ser única para cada cliente. Crie uma variável para o
nome de algum cliente e a inclua dentro da frase de boas-vindas que você fez
anteriormente.*/
function questao4() {
    let nomeCliente = "Ana Clara";
    //nome = "Angela";
    console.log("Bem-vinda, " + nomeCliente + "! Aproveite nossa loja online!");
}
questao4();


/*5. Para a organização de um carrinho de compras, pense que ele é uma lista. Na lista do
Carrinho de Compras, o cliente quer excluir algum item da lista, crie a lista com
possíveis itens da nossa loja a sua escolha. Escolha a posição de algum item de uma
lista qualquer e retorne ao cliente que ele excluiu aquele item do carrinho.*/
function questao5() {
    let carrinho = ["Vestido", "Calça", "Saia", "Salto alto"];
    let itemRemovido = carrinho.splice(2, 1);
    console.log("Você removeu o item:", itemRemovido[0]);
    console.log("Itens restantes no carrinho:", carrinho);
}
questao5();

/*6. Crie uma condição, onde, fazendo a comparação entre o preço de algum produto e a
quantidade de dinheiro que o cliente possui em sua carteira virtual, o código retorne
se a compra será efetuada ou não. Utilize duas variáveis para fazer a comparação.*/
function questao6() {
    let precoProduto = 80;
    let carteira = 100;
    if (carteira >= precoProduto) {
        console.log("Compra aprovada!");
    } else {
        console.log("Saldo insuficiente para compra.");
    }
}
questao6();

/*7. Hora de focar no estoque. Queremos impor um limite de estocagem dentro da loja
online para que não tenha peças demais e pouca demanda. Crie um código de
repetição impondo um limite de peças na loja online, contando quantas peças tem por
vez.*/
function questao7() {
    let estoque = 0;
    let limiteEstoque = 5;
    while (estoque < limiteEstoque) {
        estoque++;
        console.log("Adicionando produto ao estoque. Total atual:", estoque);
    }
    console.log("Estoque cheio! Limite atingido:", limiteEstoque);
}
questao7();


/*8. A coisa mais importante em um site é o quão rápido ele é para responder o cliente,
pois não podemos deixar várias linhas de código sendo repetidas ao longo do site, ou
ele pode ficar muito lento. Crie 2 funções de algum código das questões anteriores
para acelerar o processamento da loja online.*/
function saudacaoCliente(nome) {
    console.log("Olá, " + nome + "! Bem-vindo à nossa loja!");
}

function calcularDesconto(preco, porcentagem) {
    let desconto = preco * (porcentagem / 100);
    let precoFinal = preco - desconto;
    console.log("Preço final com desconto de " + porcentagem + "%:", precoFinal);
}

function questao8() {
    saudacaoCliente("Pedro");
    calcularDesconto(200, 15);
}
questao8();

/*9. Precisamos que as informações de tudo na loja seja bem descrito, com cada coisa
tendo sua própria característica. Crie 2 objetos que possam ser usados dentro do site,
como produtos, clientes e até funcionários, e que tenham pelo menos 2 características,
cada.*/
function questao9() {
    let produto = {
        nome: "Vestido",
        preco: 150
    };

    let cliente = {
        nome: "Ana Clara",
        idade: 19
    };

    console.log("Produto:", produto);
    console.log("Cliente:", cliente);
}
questao9();

/*10. Por fim, precisamos organizar os pagamentos dos nossos produtos. Crie 2 funções,
uma para pagamento parcelado, e outra para pagamento com desconto. Faça com que,
no fim, exista um retorno sobre quanto ficará a compra do cliente (qual o preço de
cada parcela e qual o preço final após o desconto).*/
function pagamentoParcelado(valorTotal, parcelas) {
    let valorParcela = valorTotal / parcelas;
    console.log("Pagamento parcelado em", parcelas, "vezes de R$", valorParcela.toFixed(2));
}

function pagamentoComDesconto(valorTotal, porcentagemDesconto) {
    let desconto = valorTotal * (porcentagemDesconto / 100);
    let valorFinal = valorTotal - desconto;
    console.log("Pagamento com desconto de", porcentagemDesconto + "%: R$", valorFinal.toFixed(2));
}

function questao10() {
    pagamentoParcelado(300, 5);
    pagamentoComDesconto(300, 10);
}
questao10();