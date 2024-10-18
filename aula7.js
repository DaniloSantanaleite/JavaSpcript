/* FOR EACH */

const blackSignature = [
    {
        nome: 'Danilo',
        idade: 20,
        pontos: 120.000
    },
    {
        nome: 'Daniel',
        idade: 22,
        pontos: 120.121
    },
    {
        nome: 'Dani',
        idade: 30,
        pontos: 150.000
    }
]
blackSignature.forEach(function (item, index, array) {
    
    if (item.idade >= 30) {
        console.log(`Você é um cliente signature velho com ${item.pontos} posição ${index}`)

    }

})
