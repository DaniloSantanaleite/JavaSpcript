
/* FUNÇÃO COMO PARÂMENTOS */

function soma(numero1,numero2){
    const resultado = numero1 - numero2
    console.log(resultado)
}

soma(10,5)

/* RETURN */

function soma(numero1,numero2){
    const resultado = numero1 - numero2

    return resultado
}

const resultadodasoma = soma(50-25)

console.log(resultadodasoma)

/* Arrow Function 

 - forma moderna de representar uma função
*/
const tellmyname = () => {

    console.log('Danilo Leite')
}

tellmyname()
