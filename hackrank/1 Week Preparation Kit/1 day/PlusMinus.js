function plusMinus(arr) {
    let positive = 0
    let negative = 0
    let zero = 0
    let total = arr.length
    arr.forEach((element) => {
        if (element === 0) { zero += 1 }
        else {
            element > 0 ? positive += 1 : negative += 1
        }
    })
    positive = (positive / total).toFixed(6)
    zero = (zero / total).toFixed(6)
    negative = (negative / total).toFixed(6)

    console.log(`${positive}\n${negative}\n${zero}`)
}




plusMinus([1, 1, 0, -1, -1])