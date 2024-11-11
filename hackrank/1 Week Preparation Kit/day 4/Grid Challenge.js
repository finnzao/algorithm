


function gridChallenge(grid) {
    grid.forEach((element, index) => {
        grid[index] = element.split('').sort().join('');
    });

    let isAlphabetical = true;
    grid[0].split('').forEach((_, colIndex) => {
        grid.forEach((row, rowIndex) => {
            if (rowIndex > 0) {
                if (grid[rowIndex][colIndex] < grid[rowIndex - 1][colIndex]) {
                    isAlphabetical = false;
                }
            }
        });
    });

    return isAlphabetical ? 'YES' : 'NO';

}

grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']


console.log(gridChallenge(grid))