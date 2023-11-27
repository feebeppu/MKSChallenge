const array = ["a", "b", "c", "d", "e", "f"]

printAsync(array)

// função para retornar a promise de acordo com o tempo, por exemplo: "eu te prometo que depois de tanto tempo, irá devolver o console.log"
// uma função para retornar uma promise, uma função assincrona de um timer, onde ela irá pausar de acordo com o tempo
function delayHandle(waitTime) {
    return new Promise(x => setTimeout(x, waitTime))
}

async function printAsync(array) {
    for (let i = 0; i < array.length; i++) {
        const currentDelay = (i + 1) * 1000

        await delayHandle(currentDelay)

        console.log(`Item do array: '${array[i]}'`, `Tempo para printar na tela foi de ${currentDelay / 1000} segundos`)
    }
}

