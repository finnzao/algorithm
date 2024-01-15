const gridTraveler = (m, n, memo = {}) => {
    //const key = m + ',' + n
    const key = [m, n]

    if (key in memo) return memo[key];
    //if ([m, n] in memo) return memo[m, n]
    if (m == 1 && n === 1) return 1;
    if (m == 0 || n == 0) return 0;

    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
    return memo[key]
}

console.log(gridTraveler(2, 2))
console.log(gridTraveler(4, 4))
console.log(gridTraveler(5, 6))
console.log(gridTraveler(10, 10))
console.log(gridTraveler(20, 20))