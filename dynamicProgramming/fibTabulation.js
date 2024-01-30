// Write  a fuction 'fib(n)' that takes in a number as an argument.
// The function should return the n-th number of the Fibonacci sequence

// O (n) time
// O(n) space

const fibTabulation = (n) => {
    // fib(4) + fib(5) = fib(6)
    const table = Array(n + 1).fill(0)
    table[1] = 1
    for (let i = 0; i <= n; i++) {
        table[i + 1] = table[i + 1] + table[i]
        table[i + 2] += table[i]
    }

    return table[n]
}


console.log(fibTabulation(6))