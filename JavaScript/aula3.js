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


function rand(min, max){
    return Math.floor(Math.random() * (max-min)+ min)
}
/*
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

function esperaAI(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg != 'string') {
            reject("Valor inválido");
        }
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
};

async function executar(){

    try{
        const fase1 = await esperaAI('Frase 1', rand(1000, 5000))
        console.log(fase1)
        const fase2 = await esperaAI( 002, rand(1000, 5000))
        console.log(fase2)
        const fase3 = await esperaAI('Frase 3', rand(1000, 5000))
        console.log(fase3)

    }catch(err){
        console.log(err)
    }
}

executar()