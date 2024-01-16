const howSum = (targetSum, numbers, memo = {}) => {
    console.log(memo[targetSum])
    console.log(targetSum)
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null

    for (let num of numbers) {
        const remainder = targetSum - num;
        const result = howSum(remainder, numbers, memo);
        //console.log(memo)
        if (result !== null) {
            memo[targetSum] = [...result, num];
            return memo[targetSum]
        }
    }

    memo[targetSum] = null
    return null;
}


// m = target sum
// n = numbers.length

//BRUTE FORCE
// time :O(n^m * m)
//space : O(m)


// Memoized
//time: O(n*m*2)
//space : O(m*2)
console.log(howSum(8, [2, 3, 5]))
//https://prnt.sc/RSkoyJMC856J  