//Returning the short combination 
const bestSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let bestSum = null

    for (let num in numbers) {
        const remainder = targetSum - num
        const result = bestSum(remainder, numbers)
        if (result !== null) {
            const combination = [...result, num]
            if (combination.length < bestSum.length) {
                bestSum = combination;
            }
        }

    }
}