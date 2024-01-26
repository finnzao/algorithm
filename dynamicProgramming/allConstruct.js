// return a 2D array containing all of the ways that the 'target' can be constructed by concatenating
// elements of the 'word'Bank' array.Each element of the 2D array should represent one combination that
// constructs the 'target'
// https://prnt.sc/FFVQsKcG7yuS

const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === '') return [[]]


    let arrayResult = []

    for (let word of wordBank)

        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            const suffixWays = allConstruct(suffix, wordBank)
            const targetResponses = suffixWays.map(response => [word, ...response]) // add word in every response array
            arrayResult.push(...targetResponses)//Sprend to be sure is transform in 2 DIMESION [[]],instead of 3 DIMESION [[[]]] 

        }
    memo[target] = arrayResult
    return arrayResult;
};



console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))

console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaaa"]))