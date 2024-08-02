// Given an array of  distinct integers, 
// transform the array into a zig zag sequence by permuting the array elements. 
// A sequence will be called a zig zag sequence if the first  elements in the sequence 
// are in increasing order and the last  elements are in decreasing order, where . 
// You need to find the lexicographically smallest zig zag sequence of the given array.

function processData(input) {
    // Need to sort the array first
    let n = input.length
    let k = (n + 1) / 2
    let bubbleSort = input

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (bubbleSort[j] > bubbleSort[j + 1]) {
                let temp = bubbleSort[j];
                bubbleSort[j] = bubbleSort[j + 1];
                bubbleSort[j + 1] = temp;
            }
        }
    }
    let firstHalf = [] // First to the half of array
    let secondHalf = [] // Mid Number to the finished of the array
    for (let i = 0; i < k - 1; i++) {
        firstHalf.push(bubbleSort[i])
    }
    for (let i = n - 1; i > k - 2; i--) {

        secondHalf.push(bubbleSort[i]);
    }

    let result = [...firstHalf, ...secondHalf]

    result.forEach((e) => {
        console.log(e)
    })
}

const input = [
    1, 2, 3, 4, 5, 6, 7
]


processData(input)