//funções de arrays
//filter -> array tamanho =< que o original
//recebe uma função de calback
//map -> realizar uma alteração em cada elemento dele (array tamanho = ao original)
//reduce -> reduz dá para mesclar arrays exemplo: usar um filter e um map
//for each -> elemento interação 

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 22, 27]

//numeros.filter(function(){})

/*
const numerosFiltrados = numeros.filter((valor, indice, array)=>{
    if(valor > 10){
        return true
    }
    else{
        return false
    }
})

console.log(numerosFiltrados)
*/

/*
const numerosPares = numeros.filter((valor)=>{
    if(valor % 2 === 0){
        return valor
    }

})

console.log(numerosPares)
*/


//tamanho(lenght)
//pessoas com o nome que termina com a (endswith('a'))
const pessoas = [
    {nome: 'Tiago', idade: 29},
    {nome: 'João', idade: 19},
    {nome: 'Maria', idade: 43},
    {nome: 'Joana', idade: 63},
    {nome: 'Wallace', idade: 67},
]

pessoas.forEach(e => {
    if (e.nome.endsWith('a')) {
        console.log(e.nome)
    }
});

console.log(pessoas[1].nome.length)
 
// pessoas[1] // {nome: 'João', idade: 19}
// pessoas[1].nome // nome: 'João'

// for (let index = 0; index < pessoas.length; index++) {
//     const element = pessoas[index];
    
// }

// pessoas.forEach(pessoa => {
//     pessoa.nome
// });

const pessoaNomeCincoLetras = pessoas.filter((pessoa)=>{
    if(pessoa.nome.length == 5){
        console.log(pessoa.nome, "tem 5 letras")
    }
})



// let nomep = pessoa[1].nome

// console.log(nomep.endsWith('a'))

// const nomeCincoLetras = numeros.length((valor)=>{

// })
//para o reduce -> elemento de inicialização após a função arron estará a o índice de inicialização do acumulador
//transformar reduce em filter para uma lista vazia 
