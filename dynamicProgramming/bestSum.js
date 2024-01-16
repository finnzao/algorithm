//Returning the short combination 
const bestSum = (targetSum, numbers, memo = []) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let numBestSum = null

    for (let num of numbers) {
        const remainder = targetSum - num
        const result = bestSum(remainder, numbers, memo)
        if (result !== null) {
            const combination = [...result, num]
            if (numBestSum === null || combination.length < numBestSum.length) {
                numBestSum = combination;
            }
        }

    }
    memo[targetSum] = numBestSum
    return numBestSum
}
// m = target sum
// n =numbers.length

//Brute Force
//time : O(n^m*m)
//space : O(m^2)


//Memoized
//time : O(m^2 *n)
//space :O(m^2)

console.log(bestSum(7, [5, 3, 4, 7]))

console.log(bestSum(100, [1, 2, 5, 25]))