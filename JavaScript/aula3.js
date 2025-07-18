//PROMISES / ASYNC E AWAIT
//Melhorar a estrutura das funções de calback 



//o que tinhamos antes com o calbacks


// function rand(min, max){
//     return Math.floor(Math.random() * (max-min)+ min)
// }

// function esperaAI(msg, tempo, calback){
//     setTimeout(()=>{
//         console.log(msg)
//         if(calback){
//             calback()
//         }
//     }, tempo)
// }

/*
function rand(min, max){
    return Math.floor(Math.random() * (max-min)+ min)
}

function esperaAI(msg, tempo){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //console.log(msg)
            resolve(msg)
        }, tempo)
    })
}
esperaAI('Frase1', rand(1000, 5000)).then((msg)=>{
    console.log(msg)
    return esperaAI('Frase2', rand(1000, 5000)).then((msg)=>{
        console.log(msg)
    })
}).catch()
*/
