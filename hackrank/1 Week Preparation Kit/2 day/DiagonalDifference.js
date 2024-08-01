// Given a square matrix, calculate the absolute difference between the sums of its diagonals.



function diagonalDifference(arr) {
    let n = arr.length;
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += arr[i][i];         
        secondaryDiagonalSum += arr[i][n - 1 - i]; 
    }

    let difference = primaryDiagonalSum - secondaryDiagonalSum;
    if (difference < 0) {
        difference = -difference;
    }

    return difference;


}


const matrix = [
    [1, 2, 3], //[0][0] | [0][2]
    [4, 5, 6], //[1][1] | [1][1]
    [9, 8, 9]  //[2][2]   | [2][0]
];

//console.log(matrix[0][3])
console.log(diagonalDifference(matrix))