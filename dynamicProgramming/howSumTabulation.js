// Return an array containing any combination of elements that add upp
// exactly the targetSum

// if there is no combination the ads up to targetSum ,then return null

// if there are multiple combinations possible , you may return any single one

const howSumTabulation = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null)
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                table[i + num] = [...table[i], num]
            }
        }
    }
    return table[targetSum]
}

console.log(howSumTabulation(7, [2, 3]))
console.log(howSumTabulation(7, [5, 3, 4, 7]))
console.log(howSumTabulation(300, [7, 14]))