//memoization 
//js object ,keys will be arg to fn ,value will the be return value 


const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
};


/// O(n) time
/// O(n) Space
const foo = (n) => {
    if (n <= 1) return
    foo(n - 1)
}

// O(n/2) time
// n /2
const bar = (n) => {
    if (n <= 1) return
    bar(n - 2);
}

//O(2^n) time
const dib = (n) => {
    if (n <= 1) return
    dib(n - 1);
    dib(n - 1);
}
console.log(fib(2))
console.log(foo(4))
console.log(fib(59))