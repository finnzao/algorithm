function canSum(number = Number, array = [...Number]) {
    if (number < 0) return Error("Numero precisa ser positivo")
    try {
        for (let indexOut = 0; indexOut < array.length; indexOut++) {
            const elementOut = array[indexOut];

            for (let indexIn = 0; indexIn < array.length; indexIn++) {
                const elementIn = array[indexIn];
                if (elementIn < 0) return Error("Numero precisa ser positivo")
                console.log(elementIn)
                if (elementIn === number) { return true }
                if (indexIn != indexOut) {

                    let sum = elementOut + elementIn

                    if (sum === number) return true
                }
            }
        }
    } catch (error) {
        return error
    }

}



//console.log(canSum(10, [1, 5, 4, "a", 4, 5, 10, , 6, 7, 8, 9, 0, 0, , 3, 23]))
//canSum(10, [1, 5,5])


function canSum2(targetSum, numbers, memo = {}) {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, num) === true) {
            memo[targetSum] = true
            return true
        }
    }
    memo[targetSum] = false
    return memo
}


console.log(canSum2(10, [1, 2, 3, 4]))