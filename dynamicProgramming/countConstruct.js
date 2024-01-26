// The function should return the number of ways that the 'target can be
// constructed by concatenating elements of the 'wordBank' array
// ( how many times true was returned)
// https://prnt.sc/T-UBUP9Zj_Ci

const countConstruct = (target, wordBank, memo = []) => {
    if (target in memo) return memo[target]
    if (target === '') return 1

    let totalCount = 0;
    for (let word of wordBank) {
        //Verificação para ver se palavra não está no meio do array , e sim no começo  
        if (target.indexOf(word) === 0) {
            const numWaysForRest = countConstruct(target.slice(word.length, wordBank, memo))
            totalCount += numWaysForRest
        }
    };


    memo[target] = totalCount
}

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(countConstruct("skateboard", ["bo", "rd", "skate", "oard"]))
