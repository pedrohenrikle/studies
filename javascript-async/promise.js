
console.log('Pedir uber')

const promessa = new Promise((resolve, rejected) => {
    return rejected('corrida cancelada!')
})

console.log('Aguardando...')

promessa.then(result => console.log(result)).catch(erro => console.log(erro)).finally(() => console.log("finalizada"))
