const canSumTabulation = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= numbers; i++) {
        if (table[i] === true) {

            for (let num of numbers) {
                table[i + num] = true
            }
        }
    }

    return table[targetSum]

};

console.log(canSumTabulation(7, [2, 3]));
console.log(canSumTabulation(7, [2, 3, 4, 5, 1, 7]));
