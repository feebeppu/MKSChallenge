const array = ["banana", "maça", "uva", "mamao", "banana", "uva"]

const duplicates = findDuplicates(array)

function findDuplicates(array) {
    var duplicates = []

    for(let i = 0; i < array.length; i++) {
        const current = array[i]
        
        for(let j = 0; j < array.length; j++) {
            if(j === i) continue
            // console.log(array[i], array[j])

            if(array[j] === current) {
                if(!duplicates.includes(current)) {
                    duplicates.push(current)
                }
            }
        }
    }
    
    return duplicates
}

console.log(duplicates)



