// Encontrando itens duplicados dentro de uma array

const array = ["banana", "maça", "uva", "banana", "limao", "uva", "abacaxi", "maça", "mamao", "limao"]

// Usando o método filter, ele irá percorrer os elementos da minha array, e através do indexOf de cada elemento, ele irá fazer uma busca pelo indice do elemento, e encontrar aonde encontrar primeiro, por exemplo, quando ele passa pela fruta "banana" da posição 3, na verdade ele irá encontrar que já tem um item que está na posição 0, porém quando ele retorna o index, ele irá retornar a posição 3, ou seja, 0 != 3, então ele irá retornar true e fazerá parte da nossa array de duplicados.
// Há uma busca pelo índice do elemento, se é igual ao índice do elemento atual da repetição. Se não for, o elemento é repetido e automaticamente entra para o array dos elementos repetidos
const duplicatesItens = array.filter((element, index) => array.indexOf(element) !== index) 

console.log(duplicatesItens)