const capacity = 36
const carrotTypes = [
    {kg: 5, price: 100}, 
    {kg: 7, price: 150}, 
    {kg: 3, price:70}
]

let maxValue = 0

function getMaxvalue(types, capacity) {
    for (let i = 0; i < types.length; i++) {
        const qtde = capacity / types[i].kg
        const totalPrice = qtde * types[i].price
       
        if(totalPrice > maxValue) {
            maxValue = totalPrice
        }
    }

    return maxValue
}

const max = getMaxvalue(carrotTypes, capacity)

console.log(`O valor máximo que o saco pode conter é de: R$${max}`)
