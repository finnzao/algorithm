// Return an array containing any combination of elements that add upp
// exactly the targetSum

// if there is no combination the ads up to targetSum ,then return null

// if there are multiple combinations possible , you may return any single one

const howSumTabulation = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null)
    table[0] = [];
}