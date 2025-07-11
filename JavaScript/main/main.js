
//let nome = ["Pedro Leo", "Pedro Lucas", "João Vitor"];
//Métodos em listas
//Tamanho da lista
//console.log(nome.length);
//nome.unshift("Maria Clara");
//shift unshift top push
//nome.splice(1,1) //exclui valor
//            L> indice de onde inicia a contagem(indice da lista), indice exluido {}
//nome.splice(nome.lenght,1)
//console.log(nome) 
//nome.splice
//Inserir Ana Clara (1°)
//Inserir Marcos na (3°)
//Remova o (2°)
//nome.splice(0,0, "Ana Clara")
//nome.splice(2,0, "Marcos")
//nome.splice(1,1)
//console.log(nome)
//const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//const citrus = fruits.slice(3); 
//console.log(citrus)
//let pedros = nome.slice(0,2)
//console.log(pedros)
//delete(no lugar do let exclui um item e mostra uma informação "Um local vazio")
//console.log(nome_meninos.concat(nome_meninas))
//prompt("")
//alert("")

//window//tudo que pode ser manipulado em javascript naquela janela

//Funções calback
/*
function f1(){
    setTimeout(function(){console.log("Relação estabelecida")},rand()) //Tempo para que a entrega seja executada  
}
function f2(){
    setTimeout(function(){console.log("Realizando conexão com o banco de dados")}, rand()) //Tempo para que a entrega seja executada  
}
function f3(){
    setTimeout(function(){console.log("Aguardando")}, rand()) //Tempo para que a entrega seja executada  
}
f1()
f2()
f3()
*/
//Nem sempre é possível garantir a sequência exata dos elementos
function rand(min=1000, max=5000){
    const num = Math.random() * (max-min)+ min
    return Math.floor(num)
}
function f1(calback){
    setTimeout(function(){console.log("Realizando conexão com o banco de dados ")
        if(calback){
            calback()
        }
    },rand()) //Tempo para que a entrega seja executada  
}
function f2(calback){
    setTimeout(function(){console.log("Aguardando")
        if(calback){
            calback()
    }}, rand()) //Tempo para que a entrega seja executada  
}
function f3(calback){
    setTimeout(function(){console.log("Relação estabelecida")
        if(calback){
            calback()
        }
    }, rand()) //Tempo para que a entrega seja executada  
}
f1(function(){
    f2(function(){
        f3(function(){
            console.log("Conexão encerrada")
        })
    })
})
//f2()
//f3()

f1(()=>{
    f2(()=>{
        f3(()=>{
            console.log("Conexão encerrada")
        })
    })
})
//Promisses e Async Await

