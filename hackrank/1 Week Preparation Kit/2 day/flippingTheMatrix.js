/*
Create that fuction in js 
Sean invented a game involving a 2n × 2n matrix
where each cell of the matrix contains an integer.
He can reverse any of its rows or columns any
number of times. The goal of the game is to
maximize the sum of the elements in the n x n
submatrix located in the upper-left quadrant of the
matrix.
Given the initial configurations for q matrices, help
Sean reverse the rows and columns of each matrix
in the best possible way so that the sum of the
elements in the matrix's upper-left quadrant is
maximal.

The maximal sum is 4.
Function Description
Complete the flippingMatrix function in the editor below.
flippingMatrix has the following parameters:
- int matrix[2n][2n]: a 2-dimensional array of integers
Returns
-int: the maximum sum possible.
Input Format
The first line contains an integer q, the number of queries.
The next q sets of lines are in the following format:
• The first line of each query contains an integer, n.
• Each of the next 2n lines contains 2n space-separated integers matrix [i][j] in row i of the matrix.
*/
let n = matrix.length / 2;
let maxSum = 0;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        
        let candidates = [
            matrix[i][j],
            matrix[i][2 * n - j - 1],
            matrix[2 * n - i - 1][j],
            matrix[2 * n - i - 1][2 * n - j - 1]
        ];
        maxSum += Math.max(...candidates);
    }
}

return maxSum;