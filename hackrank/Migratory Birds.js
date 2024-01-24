function migratoryBirds(arr) {
    let birds = {}
    if (!(5 < arr.length < 2 * 10 ^ 5)) { return false }
    arr.forEach((element) => {
        if (birds[element] == undefined) {
            birds[element] = 1
        } else {
            birds[element] = birds[element] + 1
        }
    });

    let lowValue = 0
    let lowKey = Object.keys(arr)[0]

    for (let key in birds) {

        if (birds[key] > lowValue & lowKey < key) {
            lowKey = key
            lowValue = birds[key]
        }

    }
    if (sum.length === 0) {
        return 0
    }
    return lowKey
}


let arr2 = [2, 2, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9]



console.log(migratoryBirds(arr2))



function migratoryBirds2(arr) {
    // Write your code here

    let newArr = {}
    const uniqueVal = [... new Set(arr)]
    uniqueVal.forEach(elem => {
        const filterVal = arr.filter(val => val == elem)
        const totalVal = filterVal.length
        newArr[elem] = totalVal
    })

    let result = Object.entries(newArr).sort(([, a], [, b]) => b - a)
    let final = result[0][0]
    return final
}